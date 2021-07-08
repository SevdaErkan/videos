import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <ul>
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      ))}
    </ul>
  );
};
export default VideoList;
