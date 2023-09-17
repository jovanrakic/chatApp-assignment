import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/login.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  searchText: string = '';
  
  users: User[] = [
    {
      id: 1,
      username: 'jovan1',
      email: 'jovan@emailcom',
      password: 'sample123',
      roles: ['superAdmin', 'groupAdmin', 'user'],
      groups: [1, 2, 3],
    },
    {
      id: 2,
      username: 'alisa23',
      email: 'alisa@emailcom',
      password: 'sample123',
      roles: ['user'],
      groups: [1, 2, 3],
    },
    {
      id: 3,
      username: 'frank19',
      email: 'frank@emailcom',
      password: 'sample123',
      roles: ['groupAdmin', 'user'],
      groups: [1, 2, 3],
    }
  ]

  constructor(
    private router: Router
  ) {}

  deleteUser(id: any) {
    // user delete capability
  }

  makeSuperAdmin(id: any) {
    // assign as super admin
  }
}
