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

  searchUrl: string = `https://api.themoviedb.org/3/search/movie${this.apiKey}&language=pt-BR&page=1&include_adult=false&query=`;

  public getMovies(tab: string, page: number): Observable<any> {
    return this.httpClient.get(
      this.urlBase + tab + this.apiKey + this.language + this.pageBase + page
    );
  }

  public searchMovie(search: string) {
    return this.httpClient.get(this.searchUrl + search);
  }

  public getMovieDetails(movieId: number) {
    return this.httpClient.get(
      this.urlBase + movieId + this.apiKey + this.language
    );
  }

  public getMovieCredits(movieId: number) {
    return this.httpClient.get(
      this.urlBase + movieId + '/credits' + this.apiKey + this.language
    );
  }

  public getMovieRecommendations(movieId: number) {
    return this.httpClient.get(
      this.urlBase + movieId + '/recommendations' + this.apiKey + this.language
    );
  }
}
