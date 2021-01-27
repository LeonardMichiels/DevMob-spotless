import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer,Map } from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  mapOptions: MapOptions;

  onMapReady(map: Map) {
    setTimeout(() => map.invalidateSize(), 0);
  }



  constructor() {

    this.mapOptions = {
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          { maxZoom: 18 }
        )
      ],
      zoom: 13,
      center: latLng(46.778186, 6.641524)
    };
    
   }
   

  ngOnInit() {
    
  }

}
