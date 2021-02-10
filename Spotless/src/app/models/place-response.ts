export class PlaceResponse {
    type: string;
    value: PlaceResponseValue;
  }
  export class PlaceResponseValue {
    _id: string;
    postedBy: string;
    title: string;
    description: string;
    location: object;
    rates: string;
  }