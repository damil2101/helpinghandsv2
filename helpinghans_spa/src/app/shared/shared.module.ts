import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';

import { FeatherModule } from 'angular-feather';
import {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle
} from 'angular-feather/icons';
import { ScrollspyDirective } from './scrollspy.directive';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { WeatherComponent } from './weather/weather.component';


const icons = {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle
};

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, ServicesComponent, FooterComponent, ScrollspyDirective,FlightsearchComponent,WeatherComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeatherModule.pick(icons),
    PaginationModule.forRoot(),
    
  ],
  // tslint:disable-next-line: max-line-length
  exports: [FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, ServicesComponent, FooterComponent, FeatherModule, ScrollspyDirective,FlightsearchComponent,WeatherComponent]
})
export class SharedModule { }
