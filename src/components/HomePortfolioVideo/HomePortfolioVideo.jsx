import React, { useState, useEffect, useRef } from "react";
import client, { urlFor, assetUrlFor } from "../../sanity";
import Heading from "../Heading/Heading";
import waiting from "../../assets/Vector (3).png";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaDownload,
  FaExpand,
  FaCompress,
  FaClosedCaptioning,
  FaCog,
  FaSpinner,
} from "react-icons/fa";

const HomePortfolioVideo = () => {
  const [playingStates, setPlayingStates] = useState([]);
  const [playbackSpeed, setPlaybackSpeed] = useState([]);
  const [resolution, setResolution] = useState([]);
  const [subtitlesEnabled, setSubtitlesEnabled] = useState([]);
  const [fullScreen, setFullScreen] = useState([]);
  const [heroSectionData, setHeroSectionData] = useState(null);
  const [settingsVisible, setSettingsVisible] = useState([]);
  const [videoCount, setVideoCount] = useState(6);
  const [category, setCategory] = useState(1); // State to manage the selected category
  const videoRefs = useRef([]);

  useEffect(() => {
    client.fetch(`*[_type == "heroSection"][0]`).then((data) => {
      setHeroSectionData(data);
      const initialPlayingStates = new Array(data.section10Title1.length).fill(
        false
      );
      setPlayingStates(initialPlayingStates);
      setPlaybackSpeed(new Array(data.section10Title1.length).fill(1));
      setResolution(new Array(data.section10Title1.length).fill("1080p"));
      setSubtitlesEnabled(new Array(data.section10Title1.length).fill(false));
      setFullScreen(new Array(data.section10Title1.length).fill(false));
      setSettingsVisible(new Array(data.section10Title1.length).fill(false));
    });
  }, []);

  if (!heroSectionData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  // Example video data filtered by category
  const videoDataByCategory = {
    1: [
      {
        title: heroSectionData.section10Title1,
        brandName: heroSectionData.section10BrandName1,
        productionTime: "2:30",
        videoPoster: urlFor(heroSectionData.section10Poster1).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video1),
      },
      {
        title: heroSectionData.section10Title2,
        brandName: heroSectionData.section10BrandName2,
        productionTime: "3:15",
        videoPoster: urlFor(heroSectionData.section10Poster2).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video2),
      },
      {
        title: heroSectionData.section10Title3,
        brandName: heroSectionData.section10BrandName3,
        productionTime: "1:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video3),
      },
      {
        title: heroSectionData.section10Title4,
        brandName: heroSectionData.section10BrandName4,
        productionTime: "4:00",
        videoPoster: urlFor(heroSectionData.section10Poster1).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video4),
      },
      {
        title: heroSectionData.section10Title5,
        brandName: heroSectionData.section10BrandName5,
        productionTime: "2:10",
        videoPoster: urlFor(heroSectionData.section10Poster2).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video5),
      },
      {
        title: heroSectionData.section10Title6,
        brandName: heroSectionData.section10BrandName6,
        productionTime: "3:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video6),
      },
      {
        title: heroSectionData.section10Title6,
        brandName: heroSectionData.section10BrandName6,
        productionTime: "3:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video6),
      },
      {
        title: heroSectionData.section10Title6,
        brandName: heroSectionData.section10BrandName6,
        productionTime: "3:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video6),
      },
      {
        title: heroSectionData.section10Title6,
        brandName: heroSectionData.section10BrandName6,
        productionTime: "3:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video6),
      },
    ],
    2: [
      {
        title: heroSectionData.section10Title6,
        brandName: heroSectionData.section10BrandName6,
        productionTime: "3:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video6),
      },
      {
        title: heroSectionData.section10Title1,
        brandName: heroSectionData.section10BrandName1,
        productionTime: "2:30",
        videoPoster: urlFor(heroSectionData.section10Poster1).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video1),
      },
      {
        title: heroSectionData.section10Title2,
        brandName: heroSectionData.section10BrandName2,
        productionTime: "3:15",
        videoPoster: urlFor(heroSectionData.section10Poster2).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video2),
      },
      {
        title: heroSectionData.section10Title3,
        brandName: heroSectionData.section10BrandName3,
        productionTime: "1:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video3),
      },
      {
        title: heroSectionData.section10Title4,
        brandName: heroSectionData.section10BrandName4,
        productionTime: "4:00",
        videoPoster: urlFor(heroSectionData.section10Poster1).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video4),
      },
      {
        title: heroSectionData.section10Title5,
        brandName: heroSectionData.section10BrandName5,
        productionTime: "2:10",
        videoPoster: urlFor(heroSectionData.section10Poster2).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video5),
      },
      {
        title: heroSectionData.section10Title6,
        brandName: heroSectionData.section10BrandName6,
        productionTime: "3:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video6),
      },
      {
        title: heroSectionData.section10Title6,
        brandName: heroSectionData.section10BrandName6,
        productionTime: "3:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video6),
      },
      {
        title: heroSectionData.section10Title6,
        brandName: heroSectionData.section10BrandName6,
        productionTime: "3:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video6),
      },
    ],
    3: [
      {
        title: heroSectionData.section10Title2,
        brandName: heroSectionData.section10BrandName2,
        productionTime: "3:15",
        videoPoster: urlFor(heroSectionData.section10Poster2).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video2),
      },
      {
        title: heroSectionData.section10Title1,
        brandName: heroSectionData.section10BrandName1,
        productionTime: "2:30",
        videoPoster: urlFor(heroSectionData.section10Poster1).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video1),
      },
      {
        title: heroSectionData.section10Title3,
        brandName: heroSectionData.section10BrandName3,
        productionTime: "1:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video3),
      },
      {
        title: heroSectionData.section10Title4,
        brandName: heroSectionData.section10BrandName4,
        productionTime: "4:00",
        videoPoster: urlFor(heroSectionData.section10Poster1).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video4),
      },
      {
        title: heroSectionData.section10Title5,
        brandName: heroSectionData.section10BrandName5,
        productionTime: "2:10",
        videoPoster: urlFor(heroSectionData.section10Poster2).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video5),
      },
      {
        title: heroSectionData.section10Title6,
        brandName: heroSectionData.section10BrandName6,
        productionTime: "3:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video6),
      },
      {
        title: heroSectionData.section10Title6,
        brandName: heroSectionData.section10BrandName6,
        productionTime: "3:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video6),
      },
      {
        title: heroSectionData.section10Title6,
        brandName: heroSectionData.section10BrandName6,
        productionTime: "3:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video6),
      },
      {
        title: heroSectionData.section10Title6,
        brandName: heroSectionData.section10BrandName6,
        productionTime: "3:45",
        videoPoster: urlFor(heroSectionData.section10Poster3).url(),
        videoSrc: assetUrlFor(heroSectionData.section10Video6),
      },
    ],
  };

  const videoData = videoDataByCategory[category] || [];
  const displayedVideos = videoData.slice(0, videoCount);

  const handlePlayPause = (index) => {
    const updatedPlayingStates = [...playingStates];
    const videoElement = videoRefs.current[index];
    if (updatedPlayingStates[index]) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    updatedPlayingStates[index] = !updatedPlayingStates[index];
    setPlayingStates(updatedPlayingStates);
  };

  const handleBackward = (index) => {
    const videoElement = videoRefs.current[index];
    videoElement.currentTime -= 10;
  };

  const handleForward = (index) => {
    const videoElement = videoRefs.current[index];
    videoElement.currentTime += 10;
  };

  const handleFullScreenToggle = (index) => {
    const videoElement = videoRefs.current[index];
    if (!fullScreen[index]) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    const updatedFullScreen = [...fullScreen];
    updatedFullScreen[index] = !updatedFullScreen[index];
    setFullScreen(updatedFullScreen);
  };

  const toggleSettings = (index) => {
    const updatedSettingsVisible = [...settingsVisible];
    updatedSettingsVisible[index] = !updatedSettingsVisible[index];
    setSettingsVisible(updatedSettingsVisible);
  };

  const handlePlaybackSpeedChange = (index, speed) => {
    const updatedPlaybackSpeed = [...playbackSpeed];
    updatedPlaybackSpeed[index] = parseFloat(speed);
    setPlaybackSpeed(updatedPlaybackSpeed);
    const videoElement = videoRefs.current[index];
    videoElement.playbackRate = parseFloat(speed);
  };

  const handleResolutionChange = (index, resolution) => {
    const updatedResolution = [...resolution];
    updatedResolution[index] = resolution;
    setResolution(updatedResolution);
  };

  const handleSubtitleToggle = (index) => {
    const updatedSubtitlesEnabled = [...subtitlesEnabled];
    updatedSubtitlesEnabled[index] = !updatedSubtitlesEnabled[index];
    setSubtitlesEnabled(updatedSubtitlesEnabled);
  };

  const handleDownload = (videoSrc) => {
    const link = document.createElement("a");
    link.href = videoSrc;
    link.download = "video.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setVideoCount(6); // Reset video count when category changes
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center mb-4">
        <button
          onClick={() => handleCategoryChange(1)}
          className={`uppercase px-4 py-2 md:px-8 md:py-2 rounded-full m-2 transition duration-150 ease-in-out ${
            category === 1
              ? "bg-white text-black"
              : "border text-white hover:bg-white hover:text-black"
          }`}
        >
          Category 1
        </button>
        <button
          onClick={() => handleCategoryChange(2)}
          className={`uppercase px-4 py-2 md:px-8 md:py-2 rounded-full m-2 transition duration-150 ease-in-out ${
            category === 2
              ? "bg-white text-black"
              : "border text-white hover:bg-white hover:text-black"
          }`}
        >
          Category 2
        </button>
        <button
          onClick={() => handleCategoryChange(3)}
          className={`uppercase px-4 py-2 md:px-8 md:py-2 rounded-full m-2 transition duration-150 ease-in-out ${
            category === 3
              ? "bg-white text-black"
              : "border text-white hover:bg-white hover:text-black"
          }`}
        >
          Category 3
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 px-4 md:px-0">
        {displayedVideos.map((video, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col gap-y-4 items-center p-4 rounded-lg"
          >
            <div className="relative video-container-portfolio w-full">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                controls
                poster={video.videoPoster}
                className="w-full rounded-md"
              >
                <source src={video.videoSrc} type="video/mp4" />
                {subtitlesEnabled[index] && (
                  <track
                    src="path_to_subtitle_file.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                )}
                Your browser does not support the video tag.
              </video>
              <div className="custom-controls absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-center mb-2">
                  <button
                    onClick={() => handleBackward(index)}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  >
                    <FaBackward />
                  </button>
                  <button
                    onClick={() => handlePlayPause(index)}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  >
                    {playingStates[index] ? <FaPause /> : <FaPlay />}
                  </button>
                  <button
                    onClick={() => handleForward(index)}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  >
                    <FaForward />
                  </button>
                  <button
                    onClick={() => handleFullScreenToggle(index)}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  >
                    {fullScreen[index] ? <FaCompress /> : <FaExpand />}
                  </button>
                  <button
                    onClick={() => toggleSettings(index)}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  >
                    <FaCog />
                  </button>
                </div>
                {settingsVisible[index] && (
                  <div className="bg-gray-800 p-2 rounded-md">
                    <div className="mb-2">
                      <label className="flex items-center">
                        <FaCog className="mr-2" />
                        <select
                          value={playbackSpeed[index]}
                          onChange={(e) =>
                            handlePlaybackSpeedChange(index, e.target.value)
                          }
                          className="bg-black text-white rounded p-1"
                        >
                          <option value="0.5">0.5x</option>
                          <option value="1">1x</option>
                          <option value="1.5">1.5x</option>
                          <option value="2">2x</option>
                        </select>
                      </label>
                    </div>
                    <div className="mb-2">
                      <label className="flex items-center">
                        <FaCog className="mr-2" />
                        <select
                          value={resolution[index]}
                          onChange={(e) =>
                            handleResolutionChange(index, e.target.value)
                          }
                          className="bg-black text-white rounded p-1"
                        >
                          <option value="144p">144p</option>
                          <option value="360p">360p</option>
                          <option value="720p">720p</option>
                          <option value="1080p">1080p</option>
                        </select>
                      </label>
                    </div>
                    <div className="mb-2">
                      <button
                        onClick={() => handleSubtitleToggle(index)}
                        className="pl-4 pr-4 pt-2 pb-2 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center"
                      >
                        <FaClosedCaptioning className="mr-2" />
                        {subtitlesEnabled[index] ? "Disable" : "Enable"}{" "}
                        Subtitles
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => handleDownload(video.videoSrc)}
                        className="pl-4 pr-4 pt-2 pb-2 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center"
                      >
                        <FaDownload className="mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full text-white">
              <div className="flex justify-between">
                <Heading className="text-base italic">{video.title}</Heading>
              </div>
              <div className="flex justify-between text-[#00FFFF]">
                <Heading className="text-base">{video.brandName}</Heading>
                <span className="flex items-center gap-x-1">
                  <img src={waiting} alt="waiting" className="w-5 h-5" />
                  <span>12h</span>
                </span>
              </div>
            </div>
          </div>
        ))}
        {videoCount < videoData.length && (
          <div className="w-full flex justify-center mt-6">
            <button
              onClick={() => setVideoCount(videoCount + 6)}
              className="uppercase text-white border border-white px-8 py-3 rounded-full transition-colors duration-300 hover:bg-white hover:text-black"
            >
              Watch More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePortfolioVideo;
