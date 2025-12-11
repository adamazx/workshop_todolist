import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class WorkshopWebsocketGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: any): void{
    if(data.text === "ping"){
      console.log('DATA:pong');
      this.server.emit('message','pong');
    }else if(data.text === "pong"){
      console.log('DATA:ping');
      this.server.emit('message', 'ping');
    }else{
     console.log('test')
    }
    
  }
}