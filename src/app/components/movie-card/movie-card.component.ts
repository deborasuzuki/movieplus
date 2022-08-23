import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MovieResultsInfo } from '../../models/movieplus.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movies: MovieResultsInfo[];
  @Output() movieSelected: EventEmitter<number> = new EventEmitter();

  imageUrl: string = 'https://image.tmdb.org/t/p/original';

  constructor() {}

  ngOnInit() {}

  selectMovie(movieId: number) {
    this.movieSelected.emit(movieId);
  }
}
