import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile = {};

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.profile = this.loginService.getUserData();
  }

  onSubmit(form: any) {
    console.log(form);

    const userData = JSON.stringify(form.value);
    localStorage.setItem('user', userData);
  }
}
