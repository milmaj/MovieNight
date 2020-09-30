import React from 'react';

import '@/scss/app.scss';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Container from '@/components/Container';

interface Props {}

const Main: React.FC<Props> = props => {
    return (
        <section data-layout="Main">
            <div data-component="Backdrop"></div>
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
