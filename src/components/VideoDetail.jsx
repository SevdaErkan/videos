import React from "react";
import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ....</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div>
        <iframe className="video" title="video player" src={videoSrc} />
      </div>

      <div className="info">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
