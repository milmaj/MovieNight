import config from '@/config/config';
import { Movie } from '@/shared/Movie';
import React from 'react';

interface Props {
    movie: Movie;
}

const MovieCard: React.FC<Props> = props => {
    const { movie } = props;
    return (
        <div data-component="MovieCard">
            {movie.poster_path ? <img alt={movie.title} src={`${config.apiImageUrlLow}${movie.poster_path}`} /> : null}
            <div className="__name">{movie.title}</div>
            <div className="__vote_average">{movie.vote_average}</div>
        </div>
    );
};

export default MovieCard;
