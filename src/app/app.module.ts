import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherImageComponent } from './weather-image/weather-image.component';
import { CityImageComponent } from './city-image/city-image.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherImageComponent,
    CityImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
