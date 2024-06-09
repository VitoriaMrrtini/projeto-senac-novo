import React from 'react';

interface VideoComponentProps {
  videoId: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div className="video-container">
      <iframe
        src={embedUrl}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoComponent;
