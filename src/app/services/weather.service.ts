import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // getWeatherData(cityName: string):Observable<WeatherData>{
  //   return this.http.get<WeatherData>(environment.weatherApiBasedUrl, {
  //     headers: new HttpHeaders()
  //       .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
  //       .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),

  //     params: new HttpParams()
  //       .set('q', cityName)
  //       .set('units', 'metric')
  //       .set('mode', 'json')
  //   });
  // }

getWeatherData(cityName:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBasedUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),

       params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    });
   }

}
// weatherApiBasedUrl: 'https://open-weather-map27.p.rapidapi.com/weather',
// XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
// XRapidAPIHostHeaderValue: 'open-weather-map27.p.rapidapi.com',
// XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
// XRapidAPIKeyHeaderValue: '21b05f2e13msh23d67afa6390cb8p1c4d85jsn6e1982e06e97'
// const obj={
//   first_name: "Swati",
//   last_name: "Kumari",
//   age: 23

// }