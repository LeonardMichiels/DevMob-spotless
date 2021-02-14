import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ViewDidEnter } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { Rating } from '../../models/rating';
import { RatingService } from '../../services/rating.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from "@ionic/storage";
import { HttpHeaders } from '@angular/common/http';


import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-myratings',
  templateUrl: './myratings.page.html',
  styleUrls: ['./myratings.page.scss'],
})
export class MyratingsPage implements ViewDidEnter {
  ratings: Rating[];
  user_id: any;
  dataReturned: [];
  user: string;


  constructor(
    // Inject the AuthService
    private auth: AuthService,
    // Inject the HTTP client
    public http: HttpClient,
    //service des ratings
    private ratingService: RatingService,
    //recuper l'id du place
    private route: ActivatedRoute,

    // public navCtrl: NavController,

    public modalController: ModalController,
    private storage: Storage,

    public alertController: AlertController

  ) { 

    this.ratings = [];
   
  }
  ionViewDidEnter(): void {
    this.user_id = this.auth.getUser()["source"]["source"]["_events"][0].user._id;
    console.log(this.user_id);

    // Make an HTTP request to see user's ratings
    const url = "http://spotlessapp.herokuapp.com/ratings?author="+ this.user_id;
    this.http.get<Rating[]>(url).subscribe(result => {
      this.ratings = result;
      console.log(`ratings of user loaded`, result);

    });

  }

modify(){
  //open form, passer lieu
};



  async delete(_id){

console.log(_id);

    const alert = await this.alertController.create({
      header: 'Confirmer!',
      message: 'Souhaitez-vous <strong>supprimer définitivement </strong>cette évaluation?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Effacer',
          handler: () => {

            let httpOptions = {
              headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.auth.getToken()["source"]["source"]["_events"][0].token}` //a corriger
              })
            };
          
            this.http.delete("http://spotlessapp.herokuapp.com/ratings/"+_id, httpOptions)
            .subscribe(res => { 
              console.log("resultat"+res);
            //  Router.navigatebyUrl();

            });

            // const url = "http://spotlessapp.herokuapp.com/ratings?author="+ this.user_id;
            // this.http.get<Rating[]>(url).subscribe(result => {
            //   this.ratings = result;
            //   console.log(`ratings of user loaded`, result);
        
            // });


          }
        }
      ]
    });

    await alert.present();
  }
  };


