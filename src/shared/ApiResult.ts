import { Movie } from './Movie';
import { Video } from './Video';

export type GetMoviesResult = { page: number; total_result: number; total_pages: number; results: Array<Movie> };
export type GetVideosResult = { id: number; results: Array<Video> };
