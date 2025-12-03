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
    console.log('hii', typeof(data));
    if(data.text === "ping"){
      console.log("oi")
      this.server.emit('Message','pong');
    }else if(data.text === "pong"){
      this.server.emit('Message', 'ping');
    }else{
     console.log('test')
    }
    
  }
}
