import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
api_key:string='dc982bc795680a833cab2eb6047cd40a';
constructor(private http:HttpClient) {

 }
getWeather(){
  return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&appid='+this.api_key+'&units=metric');
}
}
