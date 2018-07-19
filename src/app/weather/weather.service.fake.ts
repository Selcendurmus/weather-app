import { Observable, of } from 'rxjs'

import { IWeatherService } from 'src/app/interfaces/iweather-service'
import { ICurrentWeather } from 'src/app/interfaces/icurrent-weather'


export class WeatherServiceFake implements IWeatherService {
    private fakeWeather: ICurrentWeather = {
        city: 'Bursa',
        country: 'TR',
        date: new Date(),
        image: '',
        temperature: 280.32,
        description: 'light intensity drizzle',
    }

    public getCurrentWeather(city:string, country: string):
    Observable<ICurrentWeather> {
        return of(this.fakeWeather)
    }
}