import React from 'react';

import '@/scss/app.scss';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Container from '@/components/Container';
import { useSelector } from 'umi';
import { State } from '@/models/connect';
import { MovieModelState } from '@/models/movie';

interface Props {}

const Main: React.FC<Props> = props => {
    const movie = useSelector<State, MovieModelState>(state => state.movie);

    return (
        <section data-layout="Main">
            <div
                data-component="Backdrop"
                style={{
                    backgroundImage: movie.selectedMovie
                        ? `url("https://image.tmdb.org/t/p/original${movie.selectedMovie.backdrop_path}"`
                        : movie.movies.length
                        ? `url("https://image.tmdb.org/t/p/original${movie.movies[0].backdrop_path}"`
                        : '',
                }}
            ></div>
            <Sidebar />
            <section className="__content">
                <Header />
                <div className="__children">
                    <Container>{props.children}</Container>
                </div>
            </section>
        </section>
    );
};

export default Main;
