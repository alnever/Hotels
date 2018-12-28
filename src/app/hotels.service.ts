import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Hotel } from './hotel';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type' : 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private url = 'http://localhost:8000/booking';

  constructor(
    private http: HttpClient
  ) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get(this.url, httpOptions)
      .pipe(
        tap(response => console.log(response) ),
        map(data => data.map(hotel => new Hotel(hotel.hotelid, hotel.score, hotel.name, 0, hotel.location))),
        map(data => data as Hotel[])
      );
  }

}
