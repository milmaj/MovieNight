import { Movie } from '@/shared/Movie';
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface MovieModelState {
    movies: Array<Movie>;
    selectedMovie?: number;
}
export interface MovieModelType {
    namespace: 'movie';
    state: MovieModelState;
    effects: {
        // query: Effect;
    };
    reducers: {
        save: ImmerReducer<MovieModelState>;
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
        // *query({ payload }, { call, put }) {},
    },
    reducers: {
        save(state, action) {
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
