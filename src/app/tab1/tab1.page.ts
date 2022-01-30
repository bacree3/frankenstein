import { Component } from '@angular/core';
import { WeatherService } from "../services/weather.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  results: Observable<any>;
  searchTerm: string = '';
  information = null;

  constructor(public weatherservice: WeatherService) {}

  async addDataToPage() {
    console.log("triggered")
    this.results = this.weatherservice.getWeatherData("Atlanta");
    console.log(this.results)
  }

  ngOnInit() { }

  searchChanged() {
    // Call our service function which returns an Observable
    this.weatherservice.getWeatherData(this.searchTerm).subscribe(result => {
      this.information = result;
    });
    console.log(this.information);
  }
}
