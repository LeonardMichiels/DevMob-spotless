import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  NavParams
} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Place } from '../../../models/place';
import { Rating } from '../../../models/rating';
import { AuthService } from "src/app/auth/auth.service";
import { HttpHeaders } from '@angular/common/http';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  places: Place[];
  place_id: string;
  user: string;

  pictureData: string;


  newRating: Partial<Rating> = {};

  constructor(
    readonly modalController: ModalController,
    private navParams: NavParams,
    private route: ActivatedRoute,
    public http: HttpClient,
    private auth: AuthService,
    // private camera: Camera

  ) {

  }

  ngOnInit() {
    //  this.places=[];

    console.table(this.navParams);
    this.place_id = this.navParams.data.placeId;
    console.log(this.place_id);
  }


  onRangeChange(name: string, value: number) {
    this.newRating[name] = value;
  }

  private fixRatingModel(res: any) {
    this.auth.getUser().subscribe(user => {
      res.author = { _id: res.author, username: user.username };
      this.modalController.dismiss(res);
    });
    
  }


  submitform() {
    this.auth.getToken().subscribe(token => {
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
      };

      this.http.post<any>("http://spotlessapp.herokuapp.com/ratings/" + this.place_id, this.newRating, httpOptions)//requestOptions
        .subscribe(res => {
          console.log(res);
          this.fixRatingModel(res);
        }, error => {
          console.log(error);
        });
    })


  }

  // takePicture() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   };
  //   this.camera.getPicture(options).then(pictureData => {
  //     this.pictureData = pictureData;
  //   }).catch(err => {
  //     console.warn(`Could not take picture because: ${err.message}`);
  //   });
  // }

}
