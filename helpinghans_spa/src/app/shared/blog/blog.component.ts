import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/_services/news.service';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';
import { News } from 'src/models/news';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlightSearchService } from 'src/_services/flightSearch.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  news:News[];
  displayedNews:News[];
  totalItems:number;
  searchFlight:FormGroup;
  flightNumber:string;
  flightDate:string;
  constructor(private newsService:NewsService,private fb:FormBuilder,private flightService:FlightSearchService) { }

  ngOnInit(): void {

    this.createSearchFlightForm();

    this.newsService.getNews().subscribe(data => {
      this.totalItems = data['articles'].length;  
      
      this.news = data['articles'];
      console.log(this.news);
      this.displayedNews = this.news.filter(x=>x.urlToImage != null).slice(0,3);        
    })
  }

  pageChanged(event:PageChangedEvent):void{
    const startItem = (event.page -1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.displayedNews = this.news.filter(x=>x.urlToImage != null).slice(startItem,endItem);
  }

  createSearchFlightForm(){
    this.searchFlight = this.fb.group({
      flightNumber:['',Validators.required],
      //flightDate:[null,Validators.required]
    });
  }

  getFlights(){
    if(this.searchFlight.valid){
      this.flightNumber = this.searchFlight.value['flightNumber'];
      this.flightDate = this.searchFlight.value['flightDate'];

      this.flightService.getFlights(this.flightNumber,this.flightDate)
      .subscribe(data => {
        console.log(data);
      })
    }
  }
}
