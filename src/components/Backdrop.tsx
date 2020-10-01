import React from 'react';

interface Props {
    url: string;
}

const Backdrop: React.FC<Props> = props => {
    const { url } = props;
    return (
        <div
            data-component="Backdrop"
            style={{
                backgroundImage: `url(${url})`,
            }}
        />
    );
};

export default Backdrop;
