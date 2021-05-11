import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'app/_services/websocket.service';
// import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages = [
  ];

  constructor(
    private websocketService: WebsocketService
    // private socket: Socket
  ) { }

  ngOnInit(): void {
    this.websocketService.listen('chat_message').subscribe((data) => {
      console.log('chat_message', data);
      this.handleUserMessage(data);
    })

    this.websocketService.listen('connect_error').subscribe((error) => {
      console.log('connect_error', error);
    })
  }

  sendMessage(event) {

    console.log(this.messages, event)

    const message = {
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: 'Gezzy',
        avatar: 'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
      },
    }

    this.websocketService.emit('chat_message', message)
  }

  handleUserMessage(message) {
    this.messages.push(message);
  }

}
