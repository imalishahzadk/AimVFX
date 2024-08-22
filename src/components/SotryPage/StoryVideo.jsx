import React from "react";
import Group4695 from "../../assets/images/Group 4695.png";
const StoryVideo = () => {
  return (
    <div className="px-5 mx-auto lg:max-w-5xl sm:max-w-4xl">
      <div className="relative overflow-hidden">
        <video
          controls
          poster={Group4695}
          className="object-cover w-full h-auto "
        >
          <source src="video-file.mp4" type="video/mp4" />
        </video>
        <div className="play-icon"></div>
      </div>
    </div>
  );
};

export default StoryVideo;
