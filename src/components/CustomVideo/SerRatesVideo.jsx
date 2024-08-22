import React, { useRef, useState } from "react";
import ratesVideo from "../../assets/RatesVideo.png";
import Video from "../../assets/linkleads.mp4"
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
} from "react-icons/fa";

const SerRatesVideo = ({ videoUrl = Video, subtitlesUrl }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [resolution, setResolution] = useState("1080p");
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);

  const handlePlayClick = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          await videoRef.current.pause();
        } else {
          await videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error("Error handling video play/pause:", error);
      }
    }
  };

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 5;
    }
  };

  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 5;
    }
  };

  const handleFullScreenToggle = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const handlePlaybackSpeedChange = (speed) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      setPlaybackSpeed(speed);
    }
  };

  const handleResolutionChange = (newResolution) => {
    if (videoRef.current) {
      // This assumes you have different video URLs for different resolutions
      const newUrl = videoUrl.replace(resolution, newResolution);
      setResolution(newResolution);
      videoRef.current.src = newUrl;
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  const handleSubtitleToggle = () => {
    if (videoRef.current && videoRef.current.textTracks[0]) {
      const newSubtitlesEnabled = !subtitlesEnabled;
      videoRef.current.textTracks[0].mode = newSubtitlesEnabled
        ? "showing"
        : "hidden";
      setSubtitlesEnabled(newSubtitlesEnabled);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = videoUrl;
    link.download = "video.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleSettings = () => {
    setSettingsVisible(!settingsVisible);
  };

  return (
    <div className="ser-rates-video relative">
      <video
        ref={videoRef}
        controls
        poster={ratesVideo}
        className="object-cover h-[310px] w-[500px]"
      >
        <source src={videoUrl} type="video/mp4" />
        {subtitlesUrl && (
          <track
            src={subtitlesUrl}
            kind="subtitles"
            srcLang="en"
            label="English"
            default={subtitlesEnabled}
          />
        )}
        Your browser does not support the video tag.
      </video>
      <div className="custom-controls absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="flex justify-between items-center mb-2">
          <button
            onClick={handleBackward}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            <FaBackward />
          </button>
          <button
            onClick={handlePlayClick}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button
            onClick={handleForward}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            <FaForward />
          </button>
          <button
            onClick={handleFullScreenToggle}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            {isFullScreen ? <FaCompress /> : <FaExpand />}
          </button>
          <button
            onClick={toggleSettings}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            <FaCog />
          </button>
        </div>
        {settingsVisible && (
          <div className="absolute bottom-16 right-4 bg-gray-800 text-white p-4 rounded shadow-lg">
            <div className="mb-2">
              <label className="flex items-center">
                <FaCog className="mr-2" />
                <select
                  value={playbackSpeed}
                  onChange={(e) =>
                    handlePlaybackSpeedChange(parseFloat(e.target.value))
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
                  value={resolution}
                  onChange={(e) => handleResolutionChange(e.target.value)}
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
                onClick={handleSubtitleToggle}
                className="pl-4 pr-4 pt-2 pb-2 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center"
              >
                <FaClosedCaptioning className="mr-2" />
                {subtitlesEnabled ? "Disable" : "Enable"} Subtitles
              </button>
            </div>
            <div>
              <button
                onClick={handleDownload}
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
  );
};

export default SerRatesVideo;
