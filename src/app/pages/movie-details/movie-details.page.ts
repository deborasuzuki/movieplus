import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieplusService } from 'src/app/services/movieplus.service';

import {
  MovieDetails,
  MovieDetailsGenres,
  MovieCredits,
  MovieCreditsCast,
} from '../../models/movieplus.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: number;
  movieDetails: MovieDetails;
  movieCredits: MovieCredits;
  movieCast: MovieCreditsCast[];
  showCast: MovieCreditsCast[];
  movieGenres: MovieDetailsGenres[];
  movieRuntime: string;
  erro: any;

  imageUrl: string = 'https://image.tmdb.org/t/p/original';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieplusService
  ) {
    route.params.subscribe((params: { movieId: string }) => {
      this.movieId = Number(params.movieId);
    });
  }

  ngOnInit() {
    this.getSelectMovieDetails(this.movieId);
    this.getSelectMovieCredits(this.movieId);
  }

  getSelectMovieDetails(movieId: number) {
    this.movieService.getMovieDetails(movieId).subscribe(
      (data: MovieDetails) => {
        this.movieDetails = data;
        this.movieGenres = data.genres;
        // console.log('Select movie details', this.movieDetails);
        this.formatRuntime();
      },
      (error) => {
        this.erro = error;
        console.error('Error: ', error);
      }
    );
  }

  getSelectMovieCredits(movieId: number) {
    this.movieService.getMovieCredits(movieId).subscribe(
      (data: MovieCredits) => {
        this.movieCredits = data;
        console.log('Select movie details', this.movieCredits);
        this.filterCast();
      },
      (error) => {
        this.erro = error;
        console.error('Error: ', error);
      }
    );
  }

  filterCast() {
    this.movieCast = this.movieCredits.cast.filter(
      (item) => item.known_for_department == 'Acting'
    );
    const showCast = this.movieCast.slice(0, 8);
    console.log('cast', showCast);
  }

  formatRuntime() {
    const runtime = this.movieDetails.runtime;
    const hour = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    this.movieRuntime = `${hour}h ${minutes}m`;
  }
}
