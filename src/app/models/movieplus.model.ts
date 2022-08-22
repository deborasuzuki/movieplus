export interface MovieResults {
  dates: MovieResultsDates;
  page: number;
  results: MovieResultsInfo[];
  total_pages: number;
  total_results: number;
}

export interface MovieResultsDates {
  maximun: string;
  minimun: string;
}

export interface MovieResultsInfo {
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
