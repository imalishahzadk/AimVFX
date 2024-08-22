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

const HomeTestimonial = () => {
  const [playingStates, setPlayingStates] = useState([]);
  const [playbackSpeed, setPlaybackSpeed] = useState([]);
  const [resolution, setResolution] = useState([]);
  const [subtitlesEnabled, setSubtitlesEnabled] = useState([]);
  const [fullScreen, setFullScreen] = useState([]);
  const [heroSectionData, setHeroSectionData] = useState(null);
  const [settingsVisible, setSettingsVisible] = useState([]);
  const [displayedVideos, setDisplayedVideos] = useState([]);
  const [videoCount, setVideoCount] = useState(4); // Number of videos to display initially
  const videoRefs = useRef([]);

  useEffect(() => {
    client.fetch(`*[_type == "heroSection"][0]`).then((data) => {
      setHeroSectionData(data);
      const initialPlayingStates = new Array(data.section11Title1.length).fill(
        false
      );
      setPlayingStates(initialPlayingStates);
      setPlaybackSpeed(new Array(data.section11Title1.length).fill(1));
      setResolution(new Array(data.section11Title1.length).fill("1080p"));
      setSubtitlesEnabled(new Array(data.section11Title1.length).fill(false));
      setFullScreen(new Array(data.section11Title1.length).fill(false));
      setSettingsVisible(new Array(data.section11Title1.length).fill(false));

      // Initialize displayedVideos with the first four videos
      setDisplayedVideos([
        {
          title: data.section11Title1,
          brandName: data.section11BrandName1,
          videoSrc: assetUrlFor(data.section11Video1),
          videoPoster: urlFor(data.section11Img1).url(),
        },
        {
          title: data.section11Title2,
          brandName: data.section11BrandName2,
          videoSrc: assetUrlFor(data.section11Video2),
          videoPoster: urlFor(data.section11Img2).url(),
        },
        {
          title: data.section11Title3,
          brandName: data.section11BrandName3,
          videoSrc: assetUrlFor(data.section11Video3),
          videoPoster: urlFor(data.section11Img3).url(),
        },
        {
          title: data.section11Title4,
          brandName: data.section11BrandName4,
          videoSrc: assetUrlFor(data.section11Video4),
          videoPoster: urlFor(data.section11Img4).url(),
        },
      ]);
    });
  }, []);

  if (!heroSectionData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  const videoData = [
    {
      title: heroSectionData.section11Title1,
      brandName: heroSectionData.section11BrandName1,
      videoSrc: assetUrlFor(heroSectionData.section11Video1),
      videoPoster: urlFor(heroSectionData.section11Img1).url(),
    },
    {
      title: heroSectionData.section11Title2,
      brandName: heroSectionData.section11BrandName2,
      videoSrc: assetUrlFor(heroSectionData.section11Video2),
      videoPoster: urlFor(heroSectionData.section11Img2).url(),
    },
    {
      title: heroSectionData.section11Title3,
      brandName: heroSectionData.section11BrandName3,
      videoSrc: assetUrlFor(heroSectionData.section11Video3),
      videoPoster: urlFor(heroSectionData.section11Img3).url(),
    },
    {
      title: heroSectionData.section11Title4,
      brandName: heroSectionData.section11BrandName4,
      videoSrc: assetUrlFor(heroSectionData.section11Video4),
      videoPoster: urlFor(heroSectionData.section11Img4).url(),
    },
    {
      title: heroSectionData.section11Title5,
      brandName: heroSectionData.section11BrandName5,
      videoSrc: assetUrlFor(heroSectionData.section11Video5),
      videoPoster: urlFor(heroSectionData.section11Img5).url(),
    },
    {
      title: heroSectionData.section11Title6,
      brandName: heroSectionData.section11BrandName6,
      videoSrc: assetUrlFor(heroSectionData.section11Video6),
      videoPoster: urlFor(heroSectionData.section11Img6).url(),
    },
  ];

  const handlePlayPause = (index) => {
    const videoElement = videoRefs.current[index];
    const newPlayingStates = [...playingStates];
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        newPlayingStates[index] = true;
      } else {
        videoElement.pause();
        newPlayingStates[index] = false;
      }
    }
    setPlayingStates(newPlayingStates);
  };

  const handleForward = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.currentTime += 5;
    }
  };

  const handleBackward = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.currentTime -= 5;
    }
  };

  const handleDownload = (videoSrc) => {
    const link = document.createElement("a");
    link.href = videoSrc;
    link.download = "video.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResolutionChange = (index, resolution) => {
    const videoElement = videoRefs.current[index];
    const newResolution = [...resolution];
    newResolution[index] = resolution;
    setResolution(newResolution);
    if (resolution === "720p") {
      videoElement.src = videoElement.src.replace("1080p", "720p");
    } else if (resolution === "1080p") {
      videoElement.src = videoElement.src.replace("720p", "1080p");
    }
    videoElement.load();
    videoElement.play();
  };

  const handleSubtitleToggle = (index) => {
    const videoElement = videoRefs.current[index];
    const newSubtitlesEnabled = [...subtitlesEnabled];
    newSubtitlesEnabled[index] = !subtitlesEnabled[index];
    setSubtitlesEnabled(newSubtitlesEnabled);
    if (videoElement.textTracks[0]) {
      videoElement.textTracks[0].mode = newSubtitlesEnabled[index]
        ? "showing"
        : "hidden";
    }
  };

  const handlePlaybackSpeedChange = (index, speed) => {
    const videoElement = videoRefs.current[index];
    const newPlaybackSpeed = [...playbackSpeed];
    newPlaybackSpeed[index] = speed;
    setPlaybackSpeed(newPlaybackSpeed);
    videoElement.playbackRate = speed;
  };

  const handleFullScreenToggle = (index) => {
    const videoElement = videoRefs.current[index];
    const newFullScreen = [...fullScreen];
    if (!document.fullscreenElement) {
      videoElement.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
      newFullScreen[index] = true;
    } else {
      document.exitFullscreen();
      newFullScreen[index] = false;
    }
    setFullScreen(newFullScreen);
  };

  const toggleSettings = (index) => {
    const newSettingsVisible = [...settingsVisible];
    newSettingsVisible[index] = !newSettingsVisible[index];
    setSettingsVisible(newSettingsVisible);
  };

  const loadMoreVideos = () => {
    const nextCount = videoCount + videoData.length - videoCount;
    setDisplayedVideos(videoData.slice(0, nextCount));
    setVideoCount(nextCount);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 p-4">
        {displayedVideos.map((video, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 flex flex-col gap-y-4 items-center border-[#45a3c5] border-2 p-4 rounded-3xl shadow-lg"
          >
            <div className="relative video-container-portfolio w-full border">
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
                    default
                  />
                )}
                Your browser does not support the video tag.
              </video>
              <div className="video-controls absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                  <div className="absolute bottom-16 right-4 bg-gray-800 text-white p-4 rounded shadow-lg">
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
            <div className="flex flex-col w-full px-4 text-white">
              <div className="flex justify-between">
                <Heading className="text-[20px]">{video.title}</Heading>
              </div>
              <div className="flex justify-between text-[#00FFFF]">
                <Heading className="text-base">{video.brandName}</Heading>
              </div>
            </div>
          </div>
        ))}
      </div>
      {videoCount < videoData.length && (
        <button
          onClick={loadMoreVideos}
          className="uppercase text-white border border-[#2EABAF] px-8 py-3 rounded-full mt-8 transition-colors duration-300 hover:bg-[#2EABAF] hover:text-white"
        >
          Watch More
        </button>
      )}
    </div>
  );
};

export default HomeTestimonial;
