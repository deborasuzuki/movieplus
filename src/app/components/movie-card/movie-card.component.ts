import { Component, Input, OnInit } from '@angular/core';
import { MovieplusService } from '../../services/movieplus.service';
import { NowPlaying, NowPlayingMovies } from '../../models/movieplus.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movies: NowPlayingMovies[];
  imageUrl: string = 'https://image.tmdb.org/t/p/original';

  constructor(private movieService: MovieplusService) {}

  ngOnInit() {}
}
