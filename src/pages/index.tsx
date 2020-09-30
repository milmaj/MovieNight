import React, { useEffect } from 'react';

import { data } from '@/example';
import { Card, Col, Row, Avatar } from 'antd';
import { PlaySquareOutlined, InfoOutlined } from '@ant-design/icons';
import Details from '@/components/Details';
import { AppModelState, MovieModelState, useDispatch, useSelector } from 'umi';
import { State } from '@/models/connect';

const { Meta } = Card;

const item = data.results[14];

export default () => {
    // const dispatch = useDispatch();
    const app = useSelector<State, AppModelState>(state => state.app);
    const movie = useSelector<State, MovieModelState>(state => state.movie);
    // const selectedMovie = movie.movies.find(i => i.id === movie.selectedMovie);
    const selectedMovie = data.results[14];
    useEffect(() => {
        // dispatch({ type: 'movie/fetchPopularMovies' });
    }, []);

    return (
        <div data-page="index">
            {!app.searching && selectedMovie ? <Details movie={selectedMovie} /> : null}
            {app.searching ? (
                <Row gutter={[16, 16]} className="__items">
                    {movie.movies.map((i, index) => (
                        <Col span={8} key={index}>
                            <Card
                                cover={
                                    <img alt="example" src={`https://image.tmdb.org/t/p/original${i.backdrop_path}`} />
                                }
                                actions={[<PlaySquareOutlined key="play" />, <InfoOutlined key="info" />]}
                            >
                                <Meta
                                    avatar={<Avatar src={`https://image.tmdb.org/t/p/original${i.poster_path}`} />}
                                    title={i.title}
                                    description={i.overview}
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : null}
        </div>
    );
};
