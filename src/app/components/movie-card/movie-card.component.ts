import { Component, OnInit } from '@angular/core';
import { MovieplusService } from '../../services/movieplus.service';
import { NowPlaying, NowPlayingMovies } from '../../models/movieplus.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  results: NowPlaying;
  movies: NowPlayingMovies[];
  erro: any;
  url: string = 'https://image.tmdb.org/t/p/original';

  constructor(private movieService: MovieplusService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getNowPlaying().subscribe(
      (data: NowPlaying) => {
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
