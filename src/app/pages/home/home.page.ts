import { Component, OnInit } from '@angular/core';

import { MovieResults, MovieResultsInfo } from '../../models/movieplus.model';
import { MovieplusService } from '../../services/movieplus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomeComponent implements OnInit {
  tab: string = 'now_playing';
  results: MovieResults;
  movies: MovieResultsInfo[];
  erro: any;

  searchTerm: string = '';

  constructor(private movieService: MovieplusService) {}

  ngOnInit() {
    this.getMovies('now_playing', 1);
  }

  getMovies(tab: string, page: number) {
    this.tab = tab;

    this.movieService.getMovies(tab, page).subscribe(
      (data: MovieResults) => {
        this.results = data;
        this.movies = this.results.results;
        console.log('here', this.movies);
      },
      (error) => {
        this.erro = error;
        console.error('Error: ', error);
      }
    );
  }

  getSearchMovies() {
    this.tab = 'search';

    if (this.searchTerm) {
      this.movieService.searchMovie(this.searchTerm).subscribe(
        (data: MovieResults) => {
          this.results = data;
          this.movies = this.results.results;
          console.log('here', this.movies);
        },
        (error) => {
          this.erro = error;
          console.error('Error: ', error);
        }
      );
    }
  }
}
