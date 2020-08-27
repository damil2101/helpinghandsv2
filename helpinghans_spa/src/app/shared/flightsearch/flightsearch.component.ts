import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightSearchService } from 'src/_services/flightSearch.service';

@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.scss']
})
export class FlightsearchComponent implements OnInit {

  searchFlight:FormGroup;
  flightNumber:string;
  airportCode:string;
  flightData:any;
  flightsFound:boolean;
  constructor(private fb:FormBuilder,private flightService:FlightSearchService) { }

  ngOnInit() {
    this.createSearchFlightForm();
  }
  createSearchFlightForm(){
    this.searchFlight = this.fb.group({
      flightNumber:['',Validators.required],
      airportCode:['']
    });
  }

  getFlights(){
    if(this.searchFlight.valid){
      this.flightNumber = this.searchFlight.value['flightNumber'];
      this.airportCode = this.searchFlight.value['airportCode'];

      this.flightService.getFlights(this.flightNumber,this.airportCode)
      .subscribe(result => {
        this.flightData = result['data'];
        if(this.flightData && this.flightData.length > 0){
          this.flightsFound = true;
        }
        else 
          this.flightsFound = false;
      },error=>{
        console.log(error);
      })
    }
  }
}
