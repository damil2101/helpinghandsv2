import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {


  access_key:string='741baf5df2a68fd47b66967d719ec172'

constructor(private http:HttpClient) { }

getFlights(flightNumber:string,airportCode:string){
  if(airportCode === null)
    return this.http.get('http://localhost:5200/api/flightSearch/'+flightNumber);
  else
    return this.http.get('http://localhost:5200/api/flightSearch/flightNumber/'+flightNumber+'/airportCode/'+airportCode);
}
}
