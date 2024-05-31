import React from "react";
import "./Hero.css";
import profile_img from "../../assets/img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile Picture" />
      <h1>
        <span> I'm Jibran Zaffer,</span> Full Stack Developer from USA
      </h1>
      <p>
        Versatile and detail-oriented full-stack web developer proficient in
        building responsive and dynamic web applications using React, Node.js,
        JavaScript, HTML, and CSS
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="../../assets/JibranZafferResume.pdf"
            download={"JibranZafferResume.pdf"}
            className="resume"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
