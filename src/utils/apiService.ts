import config from '@/config/config';
import { GetMoviesResult, GetVideosResult } from '@/shared/ApiResult';
import { request } from 'umi';

export default {
    movie: {
        popular: () => {
            const url = config.apiUrl('movie/popular');
            return request<GetMoviesResult>(url);
        },
        videos: (id: number) => {
            // const url = config.apiUrl(`movie/${id}/videos`) + '&language=de-DE';
            const url = config.apiUrl(`movie/${id}/videos`);
            return request<GetVideosResult>(url);
        },
    },
    search: {
        movie: (query: string) => {
            const url = config.apiUrl(`search/movie`) + `&query=${query}`;
            return request<GetVideosResult>(url);
        },
    },
};
