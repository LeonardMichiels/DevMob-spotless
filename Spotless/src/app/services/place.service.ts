import { Injectable } from '@angular/core';

import { Place } from '../models/place';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PlaceResponse } from '../models/place-response';
import { map } from 'rxjs/operators';

const API_URL = 'http://spotlessapp.herokuapp.com/places';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }
  getPlace(): Observable<Place> {
    //const options = { observe: 'response' };
    return this.http.get<PlaceResponse>(API_URL)
    .pipe(map(convertPlaceResponseToPlace));
    console.log("ici");
  }
}

function convertPlaceResponseToPlace(response: PlaceResponse): Place {
  console.log("ici2");
  return {
    _id: response.value._id,
    postedBy: response.value.postedBy,
    title: response.value.title,
    description: response.value.description,
    location: response.value.location,
    rates: response.value.rates
  };
}