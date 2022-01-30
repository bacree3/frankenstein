import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private url = "https://api.weatherapi.com/v1/current.json?key=dfc74222aa904b8fbe6175254223001&q=";
  private param = "&aqi=no"

  public getWeatherData(city) {
    const finalUrl = this.url + city + this.param;

    return this.http.get(finalUrl);
  }
}
