import { Injectable } from '@angular/core';

import { Rating } from '../models/rating';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RatingResponse } from '../models/rating-response';
import { map } from 'rxjs/operators';

const API_URL = 'http://spotlessapp.herokuapp.com/ratings';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }
  getRating(): Observable<Rating> {
    //const options = { observe: 'response' };
    return this.http.get<RatingResponse>(API_URL)
    .pipe(map(convertRatingResponseToRating));
    console.log("ici");
  }
}

function convertRatingResponseToRating(response: RatingResponse): Rating {
  console.log("ici3");
  return {
    _id: response.value._id,
    author : response.value.author,
    place : response.value.place,
    disinfectant : response.value.disinfectant,
    mask : response.value.mask,
    distancing : response.value.distancing,
    cleaning : response.value.cleaning,
    control : response.value.control,
    image : response.value.image,
    comment : response.value.comment,
    dateAdd : response.value.dateAdd
  };
}




