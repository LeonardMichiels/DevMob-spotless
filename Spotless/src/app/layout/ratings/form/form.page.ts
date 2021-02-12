import { Component, OnInit } from '@angular/core';
import { 
ModalController, 
NavParams 
} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Place } from '../../../models/place';
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
  user:string;

  pictureData: string;

  constructor(
    private modalController: ModalController,
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



        // // Make an HTTP request to retrieve the places.
        // const url = "http://spotlessapp.herokuapp.com/places/" + this.place_id;
        // this.http.get<Place[]>(url).subscribe(result => {
        //   this.places = result;
        //   console.log(result);
        // });
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }


  submitform(){
    let mask= document.getElementById("maskform").value;
    let disinfectant= document.getElementById("disinfectionform").value;
    let distancing= document.getElementById("distanceform").value;
    let cleaning= document.getElementById("cleaningform").value;
    let control= document.getElementById("controlform").value;
    let comment = document.getElementById("commentform").value;

let data={
//"author": this.auth.getUser()["source"]["source"]["_events"][0].user._id,
//"place": this.place_id,
"mask": mask,
"disinfectant": disinfectant,
"distancing": distancing,
"cleaning": cleaning,
"control": control,
"comment": comment,
  }

  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getToken()["source"]["source"]["_events"][0].token}`
    })
  };

  this.http.post("http://spotlessapp.herokuapp.com/ratings/"+this.place_id, data, httpOptions)//requestOptions
  .subscribe(data => {
    console.log(data);
   }, error => {
    console.log(error);
  });

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
