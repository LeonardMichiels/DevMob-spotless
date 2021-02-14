export class Place {
    _id: string;
    postedBy: string;
    title: string;
    description: string;
    location: object;
    rates: string;
  }
  export interface ListResponse<T> {
    page: number;
    pageSize: number;
    total: number;
    data: T[];
}