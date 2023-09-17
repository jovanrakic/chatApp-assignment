import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {};

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  onSubmit(form: any) {
    const data = {
      email: form.value.email,
      password: form.value.password
    }

    this.router.navigateByUrl('/groups')

    // this.loginService.login(data).subscribe(res => {
    //   this.loginService.setUserData(res);
    //   this.router.navigateByUrl("/profile");
    // });
  }

}
