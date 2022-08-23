import { Component, Input, OnInit } from '@angular/core';
import { MovieRecommendationsResults } from 'src/app/models/movieplus.model';

@Component({
  selector: 'app-more-movies',
  templateUrl: './more-movies.component.html',
  styleUrls: ['./more-movies.component.scss'],
})
export class MoreMoviesComponent implements OnInit {
  @Input() movieRecommendations: MovieRecommendationsResults[];
  @Input() title: string;
  imageUrl: string = 'https://image.tmdb.org/t/p/original';

  constructor() {}

  ngOnInit() {
    console.log(this.movieRecommendations);
  }
}
