import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { io } from 'socket.io-client';
// import * as io from 'socket.io-client';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) {
    console.log('socket',  this.socket)
  }

  listen(eventName: string) {
    return new Observable((subcriber) => {
      this.socket.on(eventName, (data) => {
        subcriber.next(data);
      })
    })
  }

  emit(eventName: string, data: any) {
    console.log(' this.socket',  this.socket)
    console.log('emit', eventName, data)
    this.socket.emit(eventName, data);
  }
}
