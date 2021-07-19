import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AwesomeComponent } from './awesome/awesome.component';
import { FeaturesComponent } from './features/features.component';
import { NotebookComponent } from './notebook/notebook.component';
import { AboutComponent } from './about/about.component';
import { CallComponent } from './call/call.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import {PriceComponent} from './price/price.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    AwesomeComponent,
    FeaturesComponent,
    NotebookComponent,
    CallComponent,
    ServicesComponent,
    AboutComponent,
    TestimonialComponent,
    PriceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
