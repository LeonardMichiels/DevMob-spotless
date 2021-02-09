import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ViewDidEnter } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { Rating } from '../../models/rating';
import { RatingService } from '../../services/rating.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.page.html',
  styleUrls: ['./ratings.page.scss'],
})
export class RatingPage implements ViewDidEnter {
  ratings: Rating[];
  place_id: string;

  constructor(
    // Inject the AuthService
    private auth: AuthService,
    // Inject the HTTP client
    public http: HttpClient,
    //service des ratings
    private ratingService: RatingService,
    //recuper l'id du place
    private route: ActivatedRoute
  ) { 

    this.ratings = [
      // { _id:'5fa96f68224b3a0017733314', location:{coordinates:[32.520125,62.637738],type:'Point'}, postedBy:'5fa91dcc1a32460017971d7d', title:'un spot bien nice', description:'Bar', rates:'2'},
      // { _id:'5fa96f68224b3a0017733314', location:{coordinates:[32.520125,62.637738],type:'Point'}, postedBy:'5fa91dcc1a32460017971d7d', title:'un spot bien nice', description:'Bar', rates:'2'},
    ];

    this.place_id = this.route.snapshot.paramMap.get("place-id");
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
    const url = "http://spotlessapp.herokuapp.com/ratings?place="+this.place_id;
    this.http.get<Rating[]>(url).subscribe(result => {
      this.ratings=result;
      console.log(`ratings loaded`, result);
    
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