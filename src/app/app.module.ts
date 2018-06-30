import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherImageComponent } from './weather-image/weather-image.component';
import { CityImageComponent } from './city-image/city-image.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { FiveDayWeatherForecastComponent } from './five-day-weather-forecast/five-day-weather-forecast.component';
import { WeatherService } from './weather/weather.service';
import { HttpClientModule } from '@angular/common/http' ;
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    WeatherImageComponent,
    CityImageComponent,
    CurrentWeatherComponent,
    FiveDayWeatherForecastComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    MatCardModule
  
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
