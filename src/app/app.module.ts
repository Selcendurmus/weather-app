import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherImageComponent } from './weather-image/weather-image.component';
import { CityImageComponent } from './city-image/city-image.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { FiveDayWeatherForecastComponent } from './five-day-weather-forecast/five-day-weather-forecast.component';
import { WeatherService } from './weather/weather.service';
import { HttpClientModule } from '@angular/common/http' ;
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitySearchComponent } from './city-search/city-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    WeatherImageComponent,
    CityImageComponent,
    CurrentWeatherComponent,
    FiveDayWeatherForecastComponent,
    CitySearchComponent,
    

  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
    
  
    
    
  
  ],

  exports: [
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],

  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
