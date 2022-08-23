import { Component, Input, OnInit } from '@angular/core';
import { MovieCreditsCast } from '../../models/movieplus.model';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
})
export class CastComponent implements OnInit {
  @Input() showCast: MovieCreditsCast[];

  imageUrl: string = 'https://image.tmdb.org/t/p/original';

  constructor() {}

  ngOnInit() {
    console.log('cast 2', this.showCast);
  }
}
