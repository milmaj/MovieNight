import React from 'react';

import '@/scss/app.scss';

interface Props {}

const Main: React.FC<Props> = props => {
    return <div data-layout="index">{props.children}</div>;
};

export default Main;
