import React from 'react';
import { Col, Row } from 'antd';
import { Movie } from '@/shared/Movie';
import { HeartOutlined, FireOutlined } from '@ant-design/icons';
import Tag from './Tag';
import { Genre } from '@/shared/Genre';

interface Props {
    movie: Movie;
    allGenres: Genre[];
}

const MovieDetails: React.FC<Props> = props => {
    const { movie, allGenres } = props;
    return (
        <div data-component="MovieDetails">
            <div className="__year">{new Date(movie.release_date).getFullYear()}</div>
            <h1 className="__title">{movie.title}</h1>
            <div className="__overview">{movie.overview}</div>
            <div className="__genre">
                <Row gutter={[16, 16]}>
                    {movie.genre_ids.map((i, index) => (
                        <Col key={index}>
                            <Tag>{allGenres.find(g => g.id === i)?.name || i}</Tag>
                        </Col>
                    ))}
                </Row>
            </div>
            <Row gutter={[16, 16]}>
                <Col>
                    <div className="__fact">
                        <FireOutlined />
                        {movie.popularity}
                    </div>
                </Col>
                <Col>
                    <div className="__fact">
                        <HeartOutlined />
                        {movie.vote_average} ({movie.vote_count})
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MovieDetails;
