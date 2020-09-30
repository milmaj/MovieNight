const config = {
    development: {
        apiUrl: (path?: string) => 'https://api.themoviedb.org/3/' + path + '?api_key=1d00bcddd17c7860ca819541a5bc60c2',
    },
    production: {
        apiUrl: (path?: string) => 'https://api.themoviedb.org/3/' + path + '?api_key=1d00bcddd17c7860ca819541a5bc60c2',
    },
};

export default window.location.hostname === 'localhost' ? config.development : config.production;
