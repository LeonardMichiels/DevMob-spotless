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

    const filtreTexte = (arr:Array<Place>, requete:string) => {
      return arr.filter(el => el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
    }

    console.log(filtreTexte(this.places, searchedValue));

    this.places = filtreTexte(this.places, searchedValue);

    //filtrage js sur tableau des places, on peut filtrer les noms. pouvoir annuler la recherche
    //ionCancel, ShowCancelButton

  }

}