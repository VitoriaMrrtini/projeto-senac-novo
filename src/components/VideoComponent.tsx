interface VideoComponentProps {
  videoId: string;
  width?: string;
  height?: string;
}

function VideoComponent({ videoId } : VideoComponentProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
  console.log("Embed URL:", embedUrl);

  return (
    // <div className="video-container">
      <iframe
        
        src={embedUrl}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width='100%'
        height='100%'
      ></iframe>
    // </div>
  );
}

export default VideoComponent;
