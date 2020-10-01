import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { MovieModelState, useDispatch, useSelector, Link } from 'umi';
import { State } from '@/models/connect';
import MovieCard from '@/components/MovieCard';
import { GenreModelState } from '@/models/genre';

export default () => {
    const dispatch = useDispatch();
    const movie = useSelector<State, MovieModelState>(state => state.movie);
    const genre = useSelector<State, GenreModelState>(state => state.genre);

    useEffect(() => {
        !movie.movies.length ? dispatch({ type: 'movie/fetchPopularMovies' }) : null;
        !genre.genres.length ? dispatch({ type: 'genre/fetch' }) : null;
    }, []);

    return (
        <div data-page="index">
            <Row gutter={[32, 32]} className="__items">
                {movie.movies.map((movie, index) => (
                    <Col span={6} key={index}>
                        <Link to={'/movies/' + movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
};
