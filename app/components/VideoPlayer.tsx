"use client";

import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <
      // style={{ paddingTop: "56.25%" }}
    >
      <ReactPlayer
        url={videoUrl}
        width="90%"
        height="90%"
        controls={true}
        // playing={true}
        // muted={true}
      />
    </>
  );
};

export default VideoPlayer;
