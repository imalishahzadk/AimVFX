import React from "react";
import CustomVideo from "../CustomVideo/CustomVideo";
import Heading from "../Heading/Heading";
import waiting from "../../assets/Vector (3).png";
import video1 from "../../assets/Rectangle 7522 (1).png";
import video2 from "../../assets/Rectangle 7522 (2).png";
import video3 from "../../assets/Rectangle 7522.png";
const ForStartVideo = () => {
  const videoData = [
    {
      title: "Video 1",
      brandName: "Brand A",
      productionTime: "2:30",
      videoPoster: video1,
    },
    {
      title: "Video 2",
      brandName: "Brand B",
      productionTime: "3:15",
      videoPoster: video2,
    },
    {
      title: "Video 3",
      brandName: "Brand C",
      productionTime: "1:45",
      videoPoster: video3,
    },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6">
        {videoData.map((video, index) => (
          <div key={index} className="flex flex-col gap-y-1">
            <div className="video-container-portfolio">
              <video controls poster={video?.videoPoster}>
                <source src="your-video-file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="play-button"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between px-4 text-white">
                <Heading className=" text-base">{video.title}</Heading>
                <span>{video.productionTime}</span>
              </div>
              <div className="flex justify-between px-4 text-[#00FFFF]">
                <Heading className="text-base">{video.brandName}</Heading>
                <span className="flex gap-x-1 items-center">
                  <img src={waiting} className="w-5 h-5" />
                  12h
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ForStartVideo;
