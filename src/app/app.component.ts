import { Component } from '@angular/core';
import { ICurrentWeather } from './interfaces/icurrent-weather';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  template: `
  
  <div style="text-align:center">
  <mat-toolbar color="primary">
      LocalCast Weather
  </mat-toolbar>
   <div>
   <mat-card>
       <h3>Your city, your forecast, right now!</h3>
      </mat-card> 
      </div>
      <div fxLayoutAlign="center">
        <app-city-search (searchEvent)="doSearch($event)"></app-city-search>
      </div>
      <mat-card>
      <h2>Current Weather</h2>
         <app-current-weather [current]="currentWeather"></app-current-weather>
            </mat-card>
            <img mat-card-background-image src="assets/seattlebg-day.jpg">
              </div>
`
})
export class AppComponent {
  currentWeather: ICurrentWeather
  
  constructor(private weatherService: WeatherService) { }

  doSearch(searchValue) {
    
    const userInput = searchValue.split(',').map(s => s.trim())
          this.weatherService
            .getCurrentWeather(userInput[0],userInput.length > 1 ? userInput[1] : undefined)
            .subscribe(data => (this.currentWeather =data))
  }
}