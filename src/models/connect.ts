import { GenreModelState } from '@/models/genre';
import { MovieModelState } from '@/models/movie';

export type State = {
    movie: MovieModelState;
    genre: GenreModelState;
};
