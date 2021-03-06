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
import { EmailService } from 'src/_services/email.service';
import { PaymentService } from 'src/_services/payment.service';
import { WindowService } from 'src/_services/window.service';
import { AlertifyService } from 'src/_services/alertify.service';


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
  providers: [NewsService,FlightSearchService,EmailService,PaymentService,WindowService,AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
