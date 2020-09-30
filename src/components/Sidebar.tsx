import React from 'react';

import logo from '@/assets/logo.svg';
import { Link } from 'umi';

interface Props {}

const Sidebar: React.FC<Props> = props => {
    return (
        <aside data-component="Sidebar">
            <Link to="/">
                <div className="__item --logo">
                    <img src={logo} />
                </div>
            </Link>
        </aside>
    );
};

export default Sidebar;
