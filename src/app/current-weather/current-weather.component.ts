import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from 'src/app/interfaces/icurrent-weather'



@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor() { 
    this.current = {
    city: 'Seattle',
    country: 'US',
    date: new Date(),
    image: '',
    temperature: 72,
    description: 'sunny', 
  } as ICurrentWeather
}

  ngOnInit() {
  }

}
