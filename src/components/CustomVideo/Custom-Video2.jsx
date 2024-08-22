import React, { useState, useRef } from "react";

const CustomVideo = ({ poster, className }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    console.log("Video ended");
    setPlaying(false);
    videoRef.current.load(); // Reset video to the beginning
  };
  

  return (
    <div
      className={`video-container2 ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <video
        ref={videoRef}
        controls
        poster={poster}
        onEnded={handleVideoEnd}
      >
        <source
          src="https://videos.pexels.com/video-files/3249935/3249935-uhd_3840_2160_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {playing ? (
        hovering && <div className="pause-button" onClick={toggleVideo}></div>
      ) : (
        <div className="play-button" onClick={toggleVideo}></div>
      )}
    </div>
  );
};

export default CustomVideo;
