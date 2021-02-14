import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthRequest } from "../../models/auth-request";
import { AuthService } from "src/app/auth/auth.service";
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { User } from '../../models/user';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  newUser: Partial<User>={};

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

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private auth: AuthService, 
    public alertController: AlertController,
    public http: HttpClient,) {
    this.authRequest = new AuthRequest();
  }



  onRangeChange(name: string, value: number) {
    this.newUser[name] = value;
    console.log(this.newUser);
  }



  submitform() {
    this.auth.getToken().subscribe(token => {
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };

      this.http.post<any>("http://spotlessapp.herokuapp.com/users/", this.newUser, httpOptions)//requestOptions
        .subscribe(res => {
          console.log(res);
              this.router.navigateByUrl("/login")
        }, error => {
    
        });
    })

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Utilisateur crée !',
      message: 'Veuillez vous connecter dans la page de login',
      buttons: ['OK']
    });

    await alert.present();
  }


}

