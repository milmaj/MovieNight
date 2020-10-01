import { GetGenresResult } from '@/shared/ApiResult';
import { Genre } from '@/shared/Genre';
import apiService from '@/utils/apiService';
import { Effect, ImmerReducer } from 'umi';

export interface GenreModelState {
    genres: Array<Genre>;
}
export interface GenreModelType {
    namespace: 'genre';
    state: GenreModelState;
    effects: {
        fetch: Effect;
    };
    reducers: {
        saveGenres: ImmerReducer<GenreModelState>;
    };
    subscriptions: {};
}

const GenreModel: GenreModelType = {
    namespace: 'genre',
    state: {
        genres: [],
    },
    effects: {
        *fetch({ payload }, { call, put }) {
            const result: GetGenresResult = yield call(apiService.genre.movie.list);
            yield put({ type: 'saveGenres', payload: result.genres });
        },
    },
    reducers: {
        saveGenres(state, action) {
            state.genres = action.payload;
        },
    },
    subscriptions: {},
};
export default GenreModel;
