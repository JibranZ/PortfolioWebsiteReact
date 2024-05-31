import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((project) => (
          <div key={project.w_no} className="mywork-item">
            <img
              src={project.w_img}
              alt={`${project.w_name} screenshot`}
              className="mywork-image"
            />
            <div className="mywork-details">
              <h3>{project.w_name}</h3>
              <a
                href={project.w_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="mywork-link"
              >
                Code
              </a>
              <a
                href={project.w_app_link}
                target="_blank"
                rel="noopener noreferrer"
                className="mywork-link"
              >
                Live App
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
