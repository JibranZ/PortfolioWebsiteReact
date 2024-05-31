import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/my-img3.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" className="my-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am passionate web developer fluent in JavaScript, HTML, CSS, and
              more. I specialize in creating captivating frontend experiences
              and have a growing interest in backend development, particularly
              with Node.js.
            </p>
            <p>
              I thrive on challenges and love learning new technologies to
              expand my skill set.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
