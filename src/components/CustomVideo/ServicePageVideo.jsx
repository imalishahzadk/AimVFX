import React, { useEffect, useRef, useState } from "react";
import client, { urlFor, assetUrlFor } from "../../sanity";
import { FaSpinner } from "react-icons/fa"; 

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./ServicePageVideo.css";
// import Video from "../../assets/linkleads.mp4";
// import Thumbnail from "../../assets/Rectangle 130 (1).png"; 

const CustomVideoPlayer = ({ videoUrl, poster }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const volumeSliderRef = useRef(null);
  const currentVidTimeRef = useRef(null);
  const videoDurationRef = useRef(null);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [volumeIcon, setVolumeIcon] = useState("fa-volume-high");
  const [playbackRate, setPlaybackRate] = useState("1");
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    const container = containerRef.current;
    const mainVideo = videoRef.current;
    const videoTimeline = container.querySelector(".video-timeline");
    const progressBar = progressBarRef.current;
    const volumeSlider = volumeSliderRef.current;
    const currentVidTime = currentVidTimeRef.current;
    const videoDuration = videoDurationRef.current;

    let timer;

    const hideControls = () => {
      if (mainVideo.paused) return;
      timer = setTimeout(() => {
        setControlsVisible(false);
      }, 3000);
    };

    const formatTime = (time) => {
      let seconds = Math.floor(time % 60),
        minutes = Math.floor(time / 60) % 60,
        hours = Math.floor(time / 3600);

      seconds = seconds < 10 ? `0${seconds}` : seconds;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      hours = hours < 10 ? `0${hours}` : hours;

      if (hours === 0) {
        return `${minutes}:${seconds}`;
      }
      return `${hours}:${minutes}:${seconds}`;
    };

    const onVideoTimelineMouseMove = (e) => {
      let timelineWidth = videoTimeline.clientWidth;
      let offsetX = e.offsetX;
      let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration);
      const progressTime = videoTimeline.querySelector("span");
      offsetX =
        offsetX < 20
          ? 20
          : offsetX > timelineWidth - 20
          ? timelineWidth - 20
          : offsetX;
      progressTime.style.left = `${offsetX}px`;
      progressTime.innerText = formatTime(percent);
    };

    const onVideoTimelineClick = (e) => {
      let timelineWidth = videoTimeline.clientWidth;
      mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
    };

    const onVideoTimeUpdate = (e) => {
      let { currentTime, duration } = e.target;
      let percent = (currentTime / duration) * 100;
      progressBar.style.width = `${percent}%`;
      currentVidTime.innerText = formatTime(currentTime);
    };

    const onVideoLoadedData = () => {
      videoDuration.innerText = formatTime(mainVideo.duration);
    };

    const draggableProgressBar = (e) => {
      let timelineWidth = videoTimeline.clientWidth;
      progressBar.style.width = `${e.offsetX}px`;
      mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
      currentVidTime.innerText = formatTime(mainVideo.currentTime);
    };

    container.addEventListener("mousemove", () => {
      setControlsVisible(true);
      clearTimeout(timer);
      hideControls();
    });

    videoTimeline.addEventListener("mousemove", onVideoTimelineMouseMove);
    videoTimeline.addEventListener("click", onVideoTimelineClick);
    mainVideo.addEventListener("timeupdate", onVideoTimeUpdate);
    mainVideo.addEventListener("loadeddata", onVideoLoadedData);
    videoTimeline.addEventListener("mousedown", () => {
      videoTimeline.addEventListener("mousemove", draggableProgressBar);
    });
    document.addEventListener("mouseup", () => {
      videoTimeline.removeEventListener("mousemove", draggableProgressBar);
    });

    hideControls();

    return () => {
      container.removeEventListener("mousemove", hideControls);
      videoTimeline.removeEventListener("mousemove", onVideoTimelineMouseMove);
      videoTimeline.removeEventListener("click", onVideoTimelineClick);
      mainVideo.removeEventListener("timeupdate", onVideoTimeUpdate);
      mainVideo.removeEventListener("loadeddata", onVideoLoadedData);
      videoTimeline.removeEventListener("mousedown", draggableProgressBar);
      document.removeEventListener("mouseup", draggableProgressBar);
    };
  }, []);

  const onVolumeBtnClick = () => {
    const mainVideo = videoRef.current;
    if (mainVideo.volume === 0) {
      mainVideo.volume = 0.5;
      setVolumeIcon("fa-volume-high");
    } else {
      mainVideo.volume = 0;
      setVolumeIcon("fa-volume-xmark");
    }
    volumeSliderRef.current.value = mainVideo.volume;
  };

  const onVolumeSliderInput = (e) => {
    const mainVideo = videoRef.current;
    mainVideo.volume = e.target.value;
    if (e.target.value === "0") {
      setVolumeIcon("fa-volume-xmark");
    } else {
      setVolumeIcon("fa-volume-high");
    }
  };

  const onSpeedOptionClick = (e) => {
    const mainVideo = videoRef.current;
    mainVideo.playbackRate = e.target.dataset.speed;
    setPlaybackRate(e.target.dataset.speed);
  };

  const onFullScreenBtnClick = () => {
    const container = containerRef.current;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen();
    }
  };

  const onPlayPauseBtnClick = () => {
    const mainVideo = videoRef.current;
    if (mainVideo.paused) {
      mainVideo.play();
      setIsPlaying(true);
    } else {
      mainVideo.pause();
      setIsPlaying(false);
    }
  };

  const onPipBtnClick = () => {
    const mainVideo = videoRef.current;
    mainVideo.requestPictureInPicture();
  };

  const onSkipBackwardClick = () => {
    const mainVideo = videoRef.current;
    mainVideo.currentTime -= 5;
  };

  const onSkipForwardClick = () => {
    const mainVideo = videoRef.current;
    mainVideo.currentTime += 5;
  };

  return (
    <div
      className={`containerr ${controlsVisible ? "show-controls" : ""} ${
        isPlaying ? "video-playing" : ""
      }`}
      ref={containerRef}
    >
      <div className="wrapper">
        <div className="video-timeline">
          <div className="progress-area">
            <span>00:00</span>
            <div className="progress-bar" ref={progressBarRef}></div>
          </div>
        </div>
        <ul className="video-controls">
          <li className="options left">
            <button className="volume" onClick={onVolumeBtnClick}>
              <i className={`fa-solid ${volumeIcon}`}></i>
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="any"
              ref={volumeSliderRef}
              onInput={onVolumeSliderInput}
            />
            <div className="video-timer">
              <p className="current-time" ref={currentVidTimeRef}>
                00:00
              </p>
              <p className="separator"> / </p>
              <p className="video-duration" ref={videoDurationRef}>
                00:00
              </p>
            </div>
          </li>
          <li className="options center">
            <button className="skip-backward" onClick={onSkipBackwardClick}>
              <i className="fas fa-backward"></i>
            </button>
            <button className="play-pause" onClick={onPlayPauseBtnClick}>
              <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
            </button>
            <button className="skip-forward" onClick={onSkipForwardClick}>
              <i className="fas fa-forward"></i>
            </button>
          </li>
          <li className="options right">
            <div className="playback-content">
              <button
                className="playback-speed"
                onClick={() =>
                  document
                    .querySelector(".speed-options")
                    .classList.toggle("show")
                }
              >
                <span className="material-symbols-rounded">
                  slow_motion_video
                </span>
              </button>
              <ul className="speed-options">
                {["2", "1.5", "1", "0.75", "0.5"].map((speed) => (
                  <li
                    key={speed}
                    data-speed={speed}
                    className={speed === playbackRate ? "active" : ""}
                    onClick={onSpeedOptionClick}
                  >
                    {speed === "1" ? "Normal" : `${speed}x`}
                  </li>
                ))}
              </ul>
            </div>
            <button className="pic-in-pic" onClick={onPipBtnClick}>
              <span className="material-icons">picture_in_picture_alt</span>
            </button>
            <button className="fullscreen" onClick={onFullScreenBtnClick}>
              <i className="fas fa-expand"></i>
            </button>
          </li>
        </ul>
      </div>
      {!isPlaying && (
        <img
          src={poster}
          className="video-thumbnail"
          alt="Video Thumbnail"
          onClick={onPlayPauseBtnClick}
        />
      )}
      <video
        ref={videoRef}
        src={videoUrl}
        // poster={poster}
        className="main-video"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      ></video>
    </div>
  );
};

export default CustomVideoPlayer;
