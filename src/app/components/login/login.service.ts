import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endpoint: string = "http://localhost:3000/api/auth";

  constructor(
    private http: HttpClient
  ) { }

  login(data: any) {
    return this.http.post(this.endpoint, data);
  }

  setUserData(data: any) {
    const userData = JSON.stringify(data);
    localStorage.setItem('user', userData);
  }

  getUserData() {
    const userData = localStorage.getItem('user');
    return JSON.parse(userData || '{}');
  }
}
