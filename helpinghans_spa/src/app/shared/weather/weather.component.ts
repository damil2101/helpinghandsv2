import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/_services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather:any;
  weatherImg:string;
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather()
    .subscribe(data => {
      this.weather = data;
      this.weatherImg = 'https://openweathermap.org/img/wn/'+this.weather.weather[0]['icon']+'@2x.png';
    })
  }

}
