import React from 'react';

import '@/scss/app.scss';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Container from '@/components/Container';
import { useDispatch, useSelector, history } from 'umi';
import { State } from '@/models/connect';
import { MovieModelState } from '@/models/movie';
import Backdrop from '@/components/Backdrop';
import config from '@/config/config';

interface Props {}

const Main: React.FC<Props> = props => {
    const dispatch = useDispatch();
    const movie = useSelector<State, MovieModelState>(state => state.movie);

    const handleSearch = (value: string) => {
        history.push('/');
        value ? dispatch({ type: 'movie/query', payload: value }) : dispatch({ type: 'movie/fetchPopularMovies' });
    };

    return (
        <section data-layout="Main">
            <Backdrop
                url={
                    movie.selectedMovie
                        ? `${config.apiImageUrlHigh}${movie.selectedMovie.backdrop_path}`
                        : movie.movies.length
                        ? `${config.apiImageUrlHigh}${movie.movies[0].backdrop_path}`
                        : ''
                }
            />
            <Sidebar />
            <section className="__content">
                <Header onSearch={handleSearch} />
                <div className="__children">
                    <Container>{props.children}</Container>
                </div>
            </section>
        </section>
    );
};

export default Main;
