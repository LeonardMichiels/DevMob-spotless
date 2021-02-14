import { Component, OnInit } from '@angular/core';
 
import { latLng, MapOptions, marker,Marker,tileLayer,Map } from 'leaflet';


@Component({
  selector: 'app-carte',
  templateUrl: './carte.page.html',
  styleUrls: ['./carte.page.scss'],
})
export class CartePage implements OnInit {
  mapOptions: MapOptions;
  mapMarkers: Marker[];


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
      center: latLng(46.519962, 6.633597)
    };
    this.mapMarkers = [
      marker([ 46.518186, 6.631524 ], { title: "place1" , alt:"Place 1"} ),
      marker([ 46.510796, 6.637395 ], { title: "place2", alt:"Place 2" } ),
      marker([ 46.524992, 6.632267 ], { title: "place3" , alt:"Place 3"})
    ];
   }

  ngOnInit() {
  }

}
