import { Component, OnInit } from '@angular/core';

import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather

  constructor(private weatherService: WeatherService) { 
    this.current = {
      city: '',
      country: '',
      date: 0,
      image: 'assets/img/sunny.svg',
      temperature: 0,
      description: '',
    } as ICurrentWeather
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Patna', 'IN')
    .subscribe((data) => this.current = data)
   }

}