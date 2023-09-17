import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {

  searchText: string = '';

  groups: Group[] = [
    { id:1, name: "Group1", description: "Sample Group", channels: 4 },
    { id:2, name: "Community Group", description: "Sample Group", channels: 4 },
    { id:3, name: "Sports Group", description: "Sample Group", channels: 4 },
    { id:4, name: "Wedding Group", description: "Sample Group", channels: 4 },
    { id:5, name: "Car Group", description: "Sample Group", channels: 4 },
    { id:1, name: "Group1", description: "Sample Group", channels: 4 },
    { id:2, name: "Community Group", description: "Sample Group", channels: 4 },
    { id:3, name: "Sports Group", description: "Sample Group", channels: 4 },
    { id:4, name: "Wedding Group", description: "Sample Group", channels: 4 },
    { id:5, name: "Car Group", description: "Sample Group", channels: 4 },
    { id:1, name: "Group1", description: "Sample Group", channels: 4 },
    { id:2, name: "Community Group", description: "Sample Group", channels: 4 },
    { id:3, name: "Sports Group", description: "Sample Group", channels: 4 },
    { id:4, name: "Wedding Group", description: "Sample Group", channels: 4 },
    { id:5, name: "Car Group", description: "Sample Group", channels: 4 },
  ]

  constructor(
    private router: Router
  ) {}

  navigateToChannel(id: number) {
    this.router.navigateByUrl('/channels');
  }

}
