import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Map, latLng, marker, Marker, MapOptions, tileLayer } from 'leaflet';
import { Place,ListResponse } from 'src/app/models/place';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-carte',
  templateUrl: './carte.page.html',
  styleUrls: ['./carte.page.scss'],
})
export class CartePage implements OnInit {

  mapOptions: MapOptions;
  mapMarkers: Marker[] = [];
  places: Place[] ;

  constructor(
    private geolocation: Geolocation,
    public http: HttpClient,
    private router: Router,
    private location: Location
  ) { 

    this.mapOptions = {
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          { maxZoom: 18 }
        )
      ],
      zoom: 7,
      center: latLng(46.816479, 8.453503)
    };
  }

  onMapReady(map: Map) {
    setTimeout(() => map.invalidateSize(), 0);
  }

 /*  onSelect(Place) {
    this.router.navigate(['ratings/', place._id]);
  } */

  backClicked() {
    this.location.back();
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((position: Geoposition) => {
      const coords = position.coords;

      this.mapMarkers.push(marker([coords.latitude, coords.longitude]));
      this.mapOptions = {
        zoom: 20,
        center: latLng(coords.latitude, coords.longitude)
      };

      console.log(`User is at ${coords.longitude}, ${coords.latitude}`);
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });

    const url = `http://spotlessapp.herokuapp.com/places`;
     this.http.get<Place[]>(url).subscribe(result => {
      result.forEach(place => {
        
        this.mapMarkers.push(marker([place.location.coordinates[0], place.location.coordinates[1]]).bindPopup(
          `<h6>${place.title}</h6>
         
          <p>${place.description}</p>
          <a href="/ratings/${place._id}">Voir les évaluations</a>
          `
          , 
          ));
      });
    });
  } 


}