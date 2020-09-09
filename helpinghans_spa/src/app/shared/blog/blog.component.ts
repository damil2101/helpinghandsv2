import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/_services/news.service';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';
import { News } from 'src/_models/news';
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

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {

    this.newsService.getNews().subscribe(data => {
      this.totalItems = data['articles'].length;  
      
      this.news = data['articles'];
      this.displayedNews = this.news.filter(x=>x.urlToImage != null).slice(0,3);        
    })
  }

  pageChanged(event:PageChangedEvent):void{
    const startItem = (event.page -1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.displayedNews = this.news.filter(x=>x.urlToImage != null).slice(startItem,endItem);
  }

}
