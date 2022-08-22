import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieplusService {
  constructor(private httpClient: HttpClient) {}

  apiKey: string = '?api_key=32b2538fae9d6a2e14d1539dde85893f';
  language: string = '&language=pt-BR';
  pageBase: string = '&page=';
  urlBase: string = 'https://api.themoviedb.org/3/movie/';

  public getMovies(tab: string, page: number): Observable<any> {
    return this.httpClient.get(
      this.urlBase + tab + this.apiKey + this.language + this.pageBase + page
    );
  }
}
