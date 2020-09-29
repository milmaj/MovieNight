import React from 'react';

import { data } from '@/example';
import { Card, Col, Row, Avatar } from 'antd';
import { PlaySquareOutlined, InfoOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default () => {
    return (
        <div data-page="index">
            <Row gutter={[16, 16]}>
                {data.results.map((i, index) => (
                    <Col span={8} key={index}>
                        <Card
                            cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500/${i.backdrop_path}`} />}
                            actions={[<PlaySquareOutlined key="play" />, <InfoOutlined key="info" />]}
                        >
                            <Meta
                                avatar={<Avatar src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`} />}
                                title={i.title}
                                description={i.overview}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};
