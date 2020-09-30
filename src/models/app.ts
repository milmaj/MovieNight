import { Effect, ImmerReducer } from 'umi';

export interface AppModelState {
    searching: boolean;
    query?: string;
}
export interface AppModelType {
    namespace: 'app';
    state: AppModelState;
    effects: {
        query: Effect;
    };
    reducers: {
        saveQuery: ImmerReducer<AppModelState>;
        saveSearching: ImmerReducer<AppModelState>;
    };
    subscriptions: {
        // setup: Subscription
    };
}
const AppModel: AppModelType = {
    namespace: 'app',
    state: {
        searching: true,
    },
    effects: {
        *query({ payload }, { call, put }) {
            // yield call(apiService, todo);
            // yield put({ type: 'add', payload: todo });
        },
    },
    reducers: {
        saveSearching(state, action) {
            state.searching = action.payload;
        },
        saveQuery(state, action) {
            state.query = action.payload;
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
export default AppModel;
