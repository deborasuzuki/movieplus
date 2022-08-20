import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieplusService {
  constructor(private httpClient: HttpClient) {}

  apiKey: string = '32b2538fae9d6a2e14d1539dde85893f';

  url: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=pt-BR&page=1`;

  public getNowPlaying(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
