import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ViewDidEnter } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { Place } from '../../models/place';
import { PlaceService } from '../../services/place.service';
import { Router } from "@angular/router";

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
    private placeService: PlaceService,

    private router: Router, 
  ) {
  }

  ionViewDidEnter(): void {
    // Make an HTTP request to retrieve the places.
    const url = "http://spotlessapp.herokuapp.com/places";
    this.http.get<Place[]>(url).subscribe(result => {
      this.places = result.sort();
      //console.log(`Places loaded`, result);

    });

  }

  searchPlace(searchValue: CustomEvent) {
    if(searchedValue=null){
      return this.places;
    }else{
      
    console.log(searchValue.detail.value);

    var searchedValue = searchValue.detail.value;

    function filtreTexte(array: Array<Place>, requete: string) {
      return array.filter(function (el) {
       return el.title.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
      })
    }

    console.log(`Places array`, this.places);
    this.places = filtreTexte(this.places, searchedValue);

    //filtrage js sur tableau des places, on peut filtrer les noms. pouvoir annuler la recherche
    //ionCancel, ShowCancelButton

  }}


  showDefault(){
    this.router.navigateByUrl("/liste");
        // Make an HTTP request to retrieve the places.
        // const url = "http://spotlessapp.herokuapp.com/places";
        // this.http.get<Place[]>(url).subscribe(result => {
        //   return this.places = result;
          
        //   //console.log(`Places loaded`, result);
    
        // });
  }

}