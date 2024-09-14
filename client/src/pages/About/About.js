import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
// import Profile from "../../assets/𝚛_𝚍𝚒𝚗𝚘𝚘𝚔.jpeg"
import Profile from "../../assets/photo.jpg" 
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img 
                src={Profile}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Hi, I'm Md Touseef Akram, a passionate Full Stack Web Developer and B.Tech graduate with a strong interest in C++, Data Structures and Algorithms. <br/> I am passionate about exploring new technologies and constantly improving my skills. I look forward to embarking on a meaningful journey in the tech world, where I can contribute, learn and grow. Additionally, I enjoy connecting with people globally, exchanging ideas, and collaborating on innovative projects.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
