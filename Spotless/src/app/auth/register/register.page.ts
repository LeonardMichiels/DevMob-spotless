import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthRequest } from "../../models/auth-request";
import { AuthService } from "src/app/auth/auth.service";
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  user: User;

  /**
 * This authentication request object will be updated when the user
 * edits the login form. It will then be sent to the API.
 */
  authRequest: AuthRequest;

  /**
 * If true, it means that the authentication API has return a failed response
 * (probably because the name or password is incorrect).
 */
  loginError: boolean;

  constructor(private authService: AuthService, private router: Router, private auth: AuthService, public http: HttpClient,) {
    this.authRequest = new AuthRequest();
  }

  register(values) {
    this.user = values;
    console.log(this.user);
    // this.auth.getToken().subscribe(token => {
    //   let httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
    //     })
    //   };

    //   this.http.post<any>("http://spotlessapp.herokuapp.com/ratings/", values, httpOptions)//requestOptions
    //     .subscribe(res => {
    //       console.log(res);
    //     }, error => {
    //       console.log(error);
    //     });
    // })

  }


}

