export class RatingResponse {
    type: string;
    value: RatingResponseValue;
  }
  export class RatingResponseValue {
    _id: string;
    author : object;
    place : object;
    disinfectant : number;
    mask : number;
    distancing : number;
    cleaning : number;
    control : number;
    image : string;
    comment : string;
    dateAdd : Date;
  }