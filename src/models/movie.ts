import { GetMoviesResult } from '@/shared/ApiResult';
import { Movie } from '@/shared/Movie';
import apiService from '@/utils/apiService';
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface MovieModelState {
    movies: Array<Movie>;
    selectedMovie?: Movie;
}
export interface MovieModelType {
    namespace: 'movie';
    state: MovieModelState;
    effects: {
        fetchPopularMovies: Effect;
        query: Effect;
    };
    reducers: {
        saveMovies: ImmerReducer<MovieModelState>;
        saveSelectedMovie: ImmerReducer<MovieModelState>;
    };
    subscriptions: {
        // setup: Subscription
    };
}

const MovieModel: MovieModelType = {
    namespace: 'movie',
    state: {
        movies: [],
    },
    effects: {
        *fetchPopularMovies({ payload }, { call, put }) {
            const result: GetMoviesResult = yield call(apiService.movie.popular);
            yield put({ type: 'saveMovies', payload: result.results });
        },
        *query({ payload }, { call, put }) {
            yield put({ type: 'saveMovies', payload: [] });
            const result: GetMoviesResult = yield call(apiService.search.movie, payload);
            yield put({ type: 'saveMovies', payload: result.results });
        },
    },
    reducers: {
        saveMovies(state, action) {
            state.movies = action.payload;
        },
        saveSelectedMovie(state, action) {
            state.selectedMovie = action.payload;
        },
    },
    subscriptions: {
        // Example
        // setup({ dispatch, history }) {
        //     return history.listen(({ pathname }) => {
        //         if (pathname === '/') {
        //             dispatch({
        //                 type: 'query',
        //             });
        //         }
        //     });
        // },
    },
};
export default MovieModel;
