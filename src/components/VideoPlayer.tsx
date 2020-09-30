import { Video } from '@/shared/Video';
import React, { useState } from 'react';
import { Modal } from 'antd';
import YouTube from 'react-youtube';

import { PlaySquareOutlined } from '@ant-design/icons';

interface Props {
    video: Video;
}

const VideoPlayer: React.FC<Props> = props => {
    const { video } = props;
    const [visible, setVisible] = useState<boolean>(false);

    if (video.site === 'YouTube') {
        return (
            <div data-component="VideoPlayer">
                <img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
                <div className="__play" onClick={() => setVisible(true)}>
                    <PlaySquareOutlined />
                </div>
                <div className="__name">{video.name}</div>
                <div className="__overlay"></div>
                <Modal
                    title={false}
                    visible={visible}
                    bodyStyle={{ padding: 0 }}
                    footer={false}
                    width={'1000px'}
                    centered={true}
                    onCancel={() => setVisible(false)}
                    destroyOnClose={true}
                >
                    <YouTube
                        videoId={video.key}
                        opts={{ width: '1000px', height: '800px', playerVars: { autoplay: 1 } }}
                    />
                </Modal>
            </div>
        );
    }
    return null;
};

export default VideoPlayer;
