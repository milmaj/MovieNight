import React from 'react';
import { Input } from 'antd';
import Container from './Container';
import { useDispatch, history } from 'umi';
const { Search } = Input;

interface Props {}

const Header: React.FC<Props> = props => {
    const dispatch = useDispatch();
    const handleSearch = (value: string) => {
        history.push('/');
        value ? dispatch({ type: 'movie/query', payload: value }) : dispatch({ type: 'movie/fetchPopularMovies' });
    };

    return (
        <header data-component="Header">
            <Container>
                <Search className="__search" placeholder="Search" onSearch={handleSearch} enterButton={true} />
            </Container>
        </header>
    );
};

export default Header;
