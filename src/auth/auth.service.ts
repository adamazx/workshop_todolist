import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma.service';

const refreshTokensStore: Record<string, string> = {};

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (!user) return null;

    const match = await bcrypt.compare(password, user.password);
    if (!match) return null;

    const { password: pwd, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };

    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.generateRefreshToken(payload);

    refreshTokensStore[user.id.toString()] = refreshToken;

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async refreshToken(userId: string, refreshToken: string) {
    const storedToken = refreshTokensStore[userId];
    if (!storedToken || storedToken !== refreshToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    try {
      const refreshSecret =
        this.configService.get<string>('JWT_REFRESH_SECRET') ??
        'default-refresh-secret';

      const payload = jwt.verify(refreshToken, refreshSecret) as any;

      const newAccessToken = this.jwtService.sign({
        username: payload.username,
        sub: payload.sub,
      });

      const newRefreshToken = this.generateRefreshToken({
        username: payload.username,
        sub: payload.sub,
      });

      refreshTokensStore[userId] = newRefreshToken;

      return {
        access_token: newAccessToken,
        refresh_token: newRefreshToken,
      };
    } catch (err) {
      throw new UnauthorizedException('Refresh token expired or invalid');
    }
  }

  private generateRefreshToken(payload: any): string {
    const refreshSecret =
      this.configService.get<string>('JWT_REFRESH_SECRET') ??
      'default-refresh-secret';

    return jwt.sign(payload, refreshSecret, { expiresIn: '7d' });
  }
}
