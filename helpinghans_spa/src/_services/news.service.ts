import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
   
  apiKey:string = '56e70d531d5a4012b3809c1eb4127568';
  url:string = 'https://newsapi.org/v2/top-headlines?' +
          'country=ca&category=business&' +
          'apiKey='+this.apiKey;

constructor(private http:HttpClient) { }


getNews(){
  return this.http.get(this.url)
}
}
