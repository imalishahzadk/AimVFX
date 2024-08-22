import React, { useState, useRef, useEffect } from "react";
import "./CustomVideo.css";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaLock,
  FaUnlock,
  FaExpand,
  FaCompress,
  FaFastForward,
  FaFastBackward,
} from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import PropTypes from "prop-types";

const CustomVideo = ({ videoSrc, thumbnailSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStarted, setIsStarted] = useState(false); // Track if the video has started
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [duration, setDuration] = useState("00:00");
  const [currentTime, setCurrentTime] = useState("00:00");

  useEffect(() => {
    const video = videoRef.current;

    const updateTime = () => {
      if (video) {
        setCurrentTime(formatTime(video.currentTime));
        setDuration(formatTime(video.duration));
      }
    };

    video.addEventListener("timeupdate", updateTime);
    return () => {
      video.removeEventListener("timeupdate", updateTime);
    };
  }, [videoRef]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsStarted(true); // Video has started playing
      } else {
        video.pause();
      }
      setIsPlaying(!video.paused);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleVolumeChange = (e) => {
    const volume = parseFloat(e.target.value);
    const video = videoRef.current;
    if (video) {
      video.volume = volume;
      setVolume(volume);
    }
  };

  const handlePlaybackRateChange = (rate) => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = rate;
      setPlaybackRate(rate);
    }
  };

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div className="video-player-container">
      {/* Show thumbnail overlay only before the video starts */}
      {!isStarted && (
        <div
          className="thumbnail-overlay"
          onClick={togglePlay}
          style={{
            backgroundImage: `url(${thumbnailSrc})`,
          }}
        >
          <FaPlay className="play-icon" />
        </div>
      )}

      <video
        ref={videoRef}
        className="video-element"
        width="100%"
        height="100%"
        preload="auto"
        poster={thumbnailSrc} // Poster is shown before play
        onClick={togglePlay}
        style={{ display: isStarted ? "block" : "none" }} // Hide video element until started
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Show controls only when video is started */}
      {isStarted && (
        <div id="video-controls" className="video-controls">
          <div className="progress">
            <span className="current-time">{currentTime}</span>
            <input
              className="seek"
              type="range"
              min="0"
              max={videoRef.current?.duration || 100}
              value={videoRef.current?.currentTime || 0}
              onChange={(e) => {
                const video = videoRef.current;
                if (video) {
                  video.currentTime = e.target.value;
                }
              }}
            />
            <span className="total-time">{duration}</span>
          </div>

          <div className="controls-main">
            <div className="controls-left">
              <div className="volume">
                {isMuted ? (
                  <FaVolumeMute onClick={toggleMute} />
                ) : (
                  <FaVolumeUp onClick={toggleMute} />
                )}
                <input
                  id="volumeSeek"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>

            <div id="center_p">
              <FaFastBackward
                onClick={() => (videoRef.current.currentTime -= 10)}
              />
              <button className="player-btn toggle-play" onClick={togglePlay}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <FaFastForward
                onClick={() => (videoRef.current.currentTime += 10)}
              />
            </div>

            <div className="controls-right">
              <div id="lock" title="Lock" className="p-2" onClick={toggleLock}>
                {isLocked ? <FaLock /> : <FaUnlock />}
              </div>
              <div
                id="speedbtn"
                title="Playback Speed"
                onClick={() =>
                  handlePlaybackRateChange(playbackRate === 1 ? 1.5 : 1)
                }
              >
                <MdSpeed />
              </div>
              <div
                className="fullscreen"
                title="FullScreen"
                onClick={() => {
                  if (videoRef.current.requestFullscreen) {
                    videoRef.current.requestFullscreen();
                  }
                }}
              >
                {document.fullscreenElement ? <FaCompress /> : <FaExpand />}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CustomVideo.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  thumbnailSrc: PropTypes.string.isRequired,
};

export default CustomVideo;
