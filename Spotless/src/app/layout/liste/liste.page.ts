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
  filteredplaces: Place[];
  constructor(
    // Inject the AuthService
    private auth: AuthService,
    // Inject the HTTP client
    public http: HttpClient,
    //service des places
    private placeService: PlaceService
  ) {
  }

  ionViewDidEnter(): void {
    // Make an HTTP request to retrieve the places.
    const url = "http://spotlessapp.herokuapp.com/places";
    this.http.get<Place[]>(url).subscribe(result => {
      this.places = result;
      console.log(`Places loaded`, result);

    });

  }

  searchPlace(searchValue: CustomEvent) {
    console.log(searchValue.detail.value);

    var searchedValue = searchValue.detail.value;

    //console.log(searchedValue);

    function filtreTexte(arr: any, requete: string) {
      console.log(arr);
      return arr.filter(function (el) {
        console.log(el);
        return el.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
      })
    }

    this.places = filtreTexte(this.places, searchedValue);

    // var i, txtValue;
    // // Loop through all list items, and hide those who don't match the search query
    // for (i = 0; i < this.places.length; i++) {
    //   // a = places[i].getElementsByTagName("a")[0];
    //   // txtValue = a.textContent || a.innerText;
    //   console.log(this.places[i].title);
    //   txtValue=this.places[i].title;
    //   if (txtValue.toUpperCase().indexOf(searchedValue) > -1) {
    //     // places[i].style.display = "";
    //     console.log("ok");
    //     console.log(this.places[i]);
    //    this.filteredplaces.push(this.places[i]);
    //   } else {
    //     // places[i].style.display = "none";
    //     console.log("non");
    //     this.places[i];
    //   }
    //   return this.filteredplaces;
    // }

    //console.log(filtreTexte(this.places, searchedValue));


    //filtrage js sur tableau des places, on peut filtrer les noms. pouvoir annuler la recherche
    //ionCancel, ShowCancelButton

  }

}