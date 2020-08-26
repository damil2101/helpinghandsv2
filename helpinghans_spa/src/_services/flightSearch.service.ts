import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {


  access_key:string='741baf5df2a68fd47b66967d719ec172'

constructor(private http:HttpClient) { }

getFlights(flightNumber:string,date:string){
  return this.http.get('http://api.aviationstock.com/v1/flights?access_key='+this.access_key+'&flight_iata='+flightNumber);
}
}
