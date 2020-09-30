import React from 'react';
import { Input } from 'antd';
import Container from './Container';
const { Search } = Input;

interface Props {}

const Header: React.FC<Props> = props => {
    return (
        <header data-component="Header">
            <Container>
                <Search
                    className="__search"
                    placeholder="Search"
                    onSearch={value => console.log(value)}
                    onFocus={value => console.log(value)}
                    enterButton={true}
                />
            </Container>
        </header>
    );
};

export default Header;
