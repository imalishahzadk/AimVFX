import React from "react";
import CustomVideo from "../CustomVideo/CustomVideo";
import Heading from "../Heading/Heading";
import waiting from "../../assets/Vector (3).png";
import video1 from "../../assets/Rectangle 7522 (3).png";
import video2 from "../../assets/Rectangle 7522 (4).png";
import video3 from "../../assets/Rectangle 7522 (5).png";
const PageTestimonals = () => {
  const videoData = [
    {
      title: "Dmitriy Gladenko",
      brandName: "Company VideoFx",

      videoPoster: video1,
    },
    {
      title: "Eduardo Koss",
      brandName: "Berge - Conroy",

      videoPoster: video2,
    },
    {
      title: "Eugene Leuschke",
      brandName: "Heller, O'Hara and Nicolas",

      videoPoster: video3,
    },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 ">
        {videoData.map((video, index) => (
          <div className="flex flex-col gap-y-1">
            <div className="video-container-testimonal">
              <video controls poster={video?.videoPoster}>
                <source src="your-video-file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="play-button"></div>
              <div className="flex flex-col px-2 pt-2.5 text-white">
                <Heading className="text-xl italic font-semibold">
                  {video.title}
                </Heading>
                <span className="text-base ">{video.brandName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PageTestimonals;
