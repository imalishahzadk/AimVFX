import React from "react";
import CustomVideo from "../CustomVideo/CustomVideo";
import Heading from "../Heading/Heading";
import waiting from "../../assets/Vector (3).png";
import video1 from "../../assets/Rectangle 7522 (1).png";
import video2 from "../../assets/Rectangle 7522 (2).png";
import video3 from "../../assets/Rectangle 7522.png";

const PopUpVideo = () => {
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
    <div className="flex gap-5">
      {videoData.map((video, index) => {
        return (
          <div key={index}>
            <video controls poster={video.videoPoster}>
              <source src="your-video-file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-3 font-[700] text-[#fff]">
              <div className="flex justify-between items-center ">
                <h4 className="font-[500] italic text-lg">Title video name </h4>
                <h5>Production Time</h5>
              </div>
              <div className="flex justify-between items-center  text-[#00FFFF]">
                <span>Brand name</span>
                <p className="flex items-center">
                  <img src={waiting} alt="" />
                  12h
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopUpVideo;
//   <div className="play-button"></div>
