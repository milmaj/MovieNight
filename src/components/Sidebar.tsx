import React from 'react';

import logo from '@/assets/logo.svg';

interface Props {}

const Sidebar: React.FC<Props> = props => {
    return (
        <aside data-component="Sidebar">
            <div className="__item --logo">
                <img src={logo} />
            </div>
        </aside>
    );
};

export default Sidebar;
