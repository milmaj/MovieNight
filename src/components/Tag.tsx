import React from 'react';

interface Props {}

const Tag: React.FC<Props> = props => {
    return <div data-component="Tag">{props.children}</div>;
};

export default Tag;
