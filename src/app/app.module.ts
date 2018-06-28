import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherImageComponent } from './weather-image/weather-image.component';
import { CityImageComponent } from './city-image/city-image.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherImageComponent,
    CityImageComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
