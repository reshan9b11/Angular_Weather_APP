import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      "http://api.apixu.com/v1/forecast.json?key=fbccdfa11ba0432eb0e105918191804&q=" +
        location+"&days=5"
    );
  }
}
