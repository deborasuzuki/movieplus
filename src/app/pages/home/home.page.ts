import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private movieService: MovieplusService, private router: Router) {}

  ngOnInit() {
    this.getMovies('now_playing', 1);
  }

  getMovies(tab: string, page: number) {
    this.movieService.getMovies(tab, page).subscribe(
      (data: MovieResults) => {
        this.updateResults(data);
      },
      (error) => {
        this.updateError(error);
      }
    );
  }

  getSearchMovies() {
    if (this.searchTerm) {
      this.movieService.searchMovie(this.searchTerm).subscribe(
        (data: MovieResults) => {
          this.updateResults(data);
        },
        (error) => {
          this.updateError(error);
        }
      );
    }
  }

  openMovieDetails(movieId: number) {
    this.router.navigate(['/movie-details', movieId]);
  }

  private updateResults(data: MovieResults) {
    this.results = data;
    this.movies = this.results.results;
    console.log('Movie Results', this.movies);
  }

  private updateError(error: any) {
    this.erro = error;
    console.error('Error: ', error);
  }
}
