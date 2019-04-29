import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class WeaterService {

  urlBase: string = 'https://api.openweathermap.org/data/2.5';
  apiKey: string = 'd3c9a26a4cd575fb42d72a7b42345666';
  cities: any;
  city: any;
  constructor(public http: HttpClient) { }

  getCity(){
    let city = `${this.urlBase}/group?id=3688689,3435910,2950159,1850147,5368361&units=metric&APPID=${this.apiKey}`;
    return this.http.get(city).pipe(map((res: any) => {
      return this.cities = res.list;
    }));
  }

  getInfo(name, country){
    let info = `${this.urlBase}/forecast?q=${name},${country}&APPID=${this.apiKey}&cnt=20`;
    return this.http.get(info).pipe(map((res: any) => {
      return this.city = res;
    }));
  }
}
