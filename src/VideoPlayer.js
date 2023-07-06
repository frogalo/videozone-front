import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer({videoUrl}) {
    return (
        <div className="video-player">
            <ReactPlayer url={videoUrl} controls/>
        </div>
    );
}

export default VideoPlayer;
