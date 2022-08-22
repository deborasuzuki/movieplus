import { Component, OnInit } from '@angular/core';
import { MovieplusService } from '../../services/movieplus.service';
import { NowPlaying, NowPlayingMovies } from '../../models/movieplus.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomeComponent implements OnInit {
  tab: string = 'now_playing';
  results: NowPlaying;
  movies: NowPlayingMovies[];
  erro: any;

  constructor(private movieService: MovieplusService) {}

  ngOnInit() {
    this.getMovies('now_playing', 1);
  }

  getMovies(tab: string, page: number) {
    this.tab = tab;

    this.movieService.getMovies(tab, page).subscribe(
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
