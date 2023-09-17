import { Component } from '@angular/core';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-create-group-channel',
  templateUrl: './create-group-channel.component.html',
  styleUrls: ['./create-group-channel.component.css']
})
export class CreateGroupChannelComponent {

  group: Group = {};

  onSubmit(form: any) {
    console.log(form);
  }

}
