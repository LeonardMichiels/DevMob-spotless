import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ViewDidEnter } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { Place } from '../../models/place';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements ViewDidEnter {
  places: Place[];
  constructor(
    // Inject the AuthService
    private auth: AuthService,
    // Inject the HTTP client
    public http: HttpClient,
    //service des places
    private placeService: PlaceService
  ) { 
    this.places = [
      // { _id:'5fa96f68224b3a0017733314', location:{coordinates:[32.520125,62.637738],type:'Point'}, postedBy:'5fa91dcc1a32460017971d7d', title:'un spot bien nice', description:'Bar', rates:'2'},
      // { _id:'5fa96f68224b3a0017733314', location:{coordinates:[32.520125,62.637738],type:'Point'}, postedBy:'5fa91dcc1a32460017971d7d', title:'un spot bien nice', description:'Bar', rates:'2'},
    ];
  }

  // ionViewDidEnter(): void {
  //   // Make an HTTP request to retrieve the places.
  //   const url = "http://spotlessapp.herokuapp.com/places";
  //   this.http.get(url).subscribe((places) => {
  //     console.log(`Places loaded`, places);
    
  //   });

  // }


  ionViewDidEnter(): void {
    // Make an HTTP request to retrieve the places.
    const url = "http://spotlessapp.herokuapp.com/places";
    this.http.get(url).subscribe(result => {
      this.places=result;
      console.log(`Places loaded`, result);
    
    });

  }

  // addPlace() {
  //   this.placeService.getPlace().subscribe(place => {
  //     this.places.push(place);
  //   }, err => {
  //     console.warn('Could not get new place', err);
  //   });
  // }
  // ...
}