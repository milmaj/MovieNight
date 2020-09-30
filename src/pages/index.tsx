import React, { useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import { MovieModelState, useDispatch, useSelector, Link } from 'umi';
import { State } from '@/models/connect';
import MovieCard from '@/components/MovieCard';

export default () => {
    const dispatch = useDispatch();
    const movie = useSelector<State, MovieModelState>(state => state.movie);

    useEffect(() => {
        !movie.movies.length ? dispatch({ type: 'movie/fetchPopularMovies' }) : null;
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
