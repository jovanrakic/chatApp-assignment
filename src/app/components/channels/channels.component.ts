import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from '../../models/channel.model';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent {

  searchText: string = '';

  channels: Channel[] = [
    { id:1, name: "Sample Channel", description: "Sample Channel", users: 5 },
    { id:2, name: "Community Channel", description: "Sample Channel", users: 5 },
    { id:3, name: "Sports Channel", description: "Sample Channel", users: 5 },
    { id:4, name: "Wedding Channel", description: "Sample Channel", users: 5 },
    { id:5, name: "Car Channel", description: "Sample Channel", users: 5 },
    { id:1, name: "Channel1", description: "Sample Channel", users: 5 },
    { id:2, name: "Community Channel", description: "Sample Channel", users: 5 },
    { id:3, name: "Sports Channel", description: "Sample Channel", users: 5 },
    { id:4, name: "Wedding Channel", description: "Sample Channel", users: 5 },
    { id:5, name: "Car Channel", description: "Sample Channel", users: 5 },
    { id:1, name: "Channel1", description: "Sample Channel", users: 5 },
    { id:2, name: "Community Channel", description: "Sample Channel", users: 5 },
    { id:3, name: "Sports Channel", description: "Sample Channel", users: 5 },
    { id:4, name: "Wedding Channel", description: "Sample Channel", users: 5 },
    { id:5, name: "Car Channel", description: "Sample Channel", users: 5 },
  ]

  constructor(
    private router: Router
  ) {}

  navigateToChat(id: number) {
    this.router.navigateByUrl('/chat');
  }

}
