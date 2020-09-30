import React, { useEffect, useState } from 'react';
import Details from '@/components/Details';
import { MovieModelState, useDispatch, useSelector, history, useParams } from 'umi';
import { State } from '@/models/connect';
import { Video } from '@/shared/Video';
import apiService from '@/utils/apiService';
import VideoPlayer from '@/components/VideoPlayer';
import { Card, Col, Row, Avatar } from 'antd';

interface Props {}

const Page: React.FC<Props> = props => {
    const dispatch = useDispatch();
    const params = useParams<{ id: string }>();
    const movie = useSelector<State, MovieModelState>(state => state.movie);

    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        const foundMovie = movie.movies.find(i => i.id === Number(params.id));
        if (foundMovie) {
            dispatch({
                type: 'movie/saveSelectedMovie',
                payload: foundMovie,
            });
            apiService.movie.videos(foundMovie.id).then(res => setVideos(res.results));
        } else {
            history.push('/');
        }
    }, []);

    return (
        <div data-page="/movie/[id]">
            {movie.selectedMovie ? <Details movie={movie.selectedMovie} /> : null}
            <Row gutter={[16, 16]}>
                {videos
                    .filter(i => i.site === 'YouTube')
                    .map((video, index) => (
                        <Col span={6} key={index}>
                            <VideoPlayer video={video} />
                        </Col>
                    ))}
            </Row>
        </div>
    );
};

export default Page;
