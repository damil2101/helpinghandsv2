import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NewsService } from 'src/_services/news.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { FlightSearchService } from 'src/_services/flightSearch.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    CarouselModule,
    PaginationModule,
    FormsModule
  ],
  providers: [NewsService,FlightSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
