export interface NowPlaying {
  dates: NowPlayingDates;
  page: number;
  results: NowPlayingMovies[];
  total_pages: number;
  total_results: number;
}

export interface NowPlayingDates {
  maximun: string;
  minimun: string;
}

export interface NowPlayingMovies {
  adult: false;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
