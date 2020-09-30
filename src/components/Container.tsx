import React from 'react';

interface Props {}

const Container: React.FC<Props> = props => {
    return <div data-component="Container">{props.children}</div>;
};

export default Container;
