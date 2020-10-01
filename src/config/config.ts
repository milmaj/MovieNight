const config = {
    development: {
        apiUrl: (path?: string) => 'https://api.themoviedb.org/3/' + path + '?api_key=1d00bcddd17c7860ca819541a5bc60c2',
        apiImageUrlLow: 'https://image.tmdb.org/t/p/w500',
        apiImageUrlHigh: 'https://image.tmdb.org/t/p/original',
    },
    production: {
        apiUrl: (path?: string) => 'https://api.themoviedb.org/3/' + path + '?api_key=1d00bcddd17c7860ca819541a5bc60c2',
        apiImageUrlLow: 'https://image.tmdb.org/t/p/w500',
        apiImageUrlHigh: 'https://image.tmdb.org/t/p/original',
    },
};

export default window.location.hostname === 'localhost' ? config.development : config.production;
