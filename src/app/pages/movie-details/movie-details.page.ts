import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: number;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params: { movieId: string }) => {
      this.movieId = Number(params.movieId);
    });
  }

  ngOnInit() {}
}
