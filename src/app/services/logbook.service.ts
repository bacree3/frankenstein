import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogbookService {

  constructor(private http: HttpClient) { }

  private url = 'https://rep65jl5ml.execute-api.us-east-1.amazonaws.com/';

  public getVisitors() {
    const finalUrl = this.url + 'getVisitorsFromLog';
    return this.http.get(finalUrl);
  }

  public addVisitors(name) {
    const finalUrl = this.url + 'addVisitorsToLog';

    let postData = {
      "name": name
    }

    return this.http.post(finalUrl, postData)
  }

}
