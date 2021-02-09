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
    this.http.get<Place[]>(url).subscribe(result => {
      this.places = result;
      console.log(`Places loaded`, result);

    });

  }

  searchPlace(searchValue: CustomEvent) {
   //console.log(searchValue.detail.value);
    var searchedValue = searchValue.detail.value;
    var places = this.places;


    // Declare variables
    var title, title2, filter, a, i, txtValue;

    filter = searchedValue.toUpperCase();

//     title = document.getElementById("place-title");
// title2=title.getElementsByTagName("ion-card-title");

    // ul = document.getElementById("myUL");
    // li = ul.getElementsByTagName("li");

console.log(places.length);


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < places.length; i++) {
      // a = places[i].getElementsByTagName("a")[0];
      // txtValue = a.textContent || a.innerText;
      console.log(places[i].title);
      txtValue=places[i].title;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        // places[i].style.display = "";
        console.log("ciao");
        places[i];
      } else {
        // places[i].style.display = "none";
        console.log("ciao2");
        places[i];
      }

    }
    //filtrage js sur tableau des places, on peut filtrer les noms. pouvoir annuler la recherche
    //ionCancel, ShowCancelButton

  }

}