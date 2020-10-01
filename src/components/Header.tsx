import React from 'react';
import { Input } from 'antd';
import Container from './Container';
const { Search } = Input;

interface Props {
    onSearch: (value: string) => void;
}

const Header: React.FC<Props> = props => {
    const { onSearch } = props;

    return (
        <header data-component="Header">
            <Container>
                <Search className="__search" placeholder="Search" onSearch={onSearch} enterButton={true} />
            </Container>
        </header>
    );
};

export default Header;
