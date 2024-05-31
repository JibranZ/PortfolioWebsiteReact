import React from "react";
import video from "../assets/stars.mp4";
const Video = () => {
  return (
    <div className="video">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className="content">
        <h1>WELCOME</h1>
        <h3>To My Portfolio</h3>
        <p>Jibran Zaffer</p>
      </div>
    </div>
  );
};

export default Video;
