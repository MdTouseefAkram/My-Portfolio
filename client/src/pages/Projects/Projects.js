import React from "react";
import "./Projects.css";
import HeadShake from "react-reveal/HeadShake";
import Razorpay from "../../assets/Razorpay Clone.png"
import StudyNotion from "../../assets/StudyNotion.png"
import WeatherApp from "../../assets/Weather App.png"
import Portfolio from "../../assets/Portfolio.png"
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <h6 className="pb-3 text-center">
        ✨ Thrilled to present my projects! ✨



        </h6>
        {/* card design */}
        <div className="row" id="ads">
          <HeadShake>
    {/* Project 1 */}
          <div className="col-md-6 mb-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                  
                    src={StudyNotion} 
                    alt="project1"
                    
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">Redux</span>
                  <span className="card-detail-badge">Tailwind CSS</span>
                  <span className="card-detail-badge">Node.js</span>
                  <span className="card-detail-badge">Express.js</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                     Study Notion
                    </h5>
                    
                  </div >
                  <div className="ad-title m-auto">
                    <p className="desc">
                    Study Notion is an EdTech (Education Technology) web application developed using the MERN stack.
                    StudyNotion aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging.
                    </p>
                    
                  </div >
                  <div className="Link-github">
                  <a
                    className="ad-btn"
                    href="https://study-notion-frontend-seven-phi.vercel.app/"
                    target="_blank" rel="noreferrer"
                    
                    
                  >
                    Live Link
                    <FaLink className="icons" size={20}/>

                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/MdTouseefAkram/StudyNotion"
                    target="_blank" rel="noreferrer"
                  >
                    Github Link
                    <FaGithub className="icons" size={20}/>
                  </a>
                  </div>
                </div>
              </div>
            </div>

      {/* Project 2 */}

            <div className="col-md-6">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-End</span>
                  <img
                    src={WeatherApp}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>

                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Weather App</h5>
                  </div>
                  <div className="ad-title m-auto">
                    <p className="desc">
                    Designed and developed a web application that provides real-time weather information for a given location. The app uses free weather API to retrieve weather data and displays it in an easy-to-read format.  It allows us to view the current temperature, wind speed and humidity. We can search weather by city name.
                    </p>
                    
                  </div >
                  <div className="Link-github">
                  <a
                    className="ad-btn"
                    href="https://mdtouseefakram.github.io/Weather-App/"
                    target="_blank" rel="noreferrer"
                  >
                    Live Link
                    <FaLink className="icons" size={20}/>

                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/MdTouseefAkram/Weather-App"
                    target="_blank" rel="noreferrer"
                  >
                    Github Link
                    <FaGithub className="icons" size={20}/>
                  </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-6">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN</span>
                  <img
                    src={Portfolio}
                  
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Express.js</span>
                  <span className="card-detail-badge">Node.js</span>

                 
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Portfolio Website</h5>
                  </div>
                  <div className="ad-title m-auto">
                    <p className="desc">
                    Developed a personal portfolio website to showcase projects, skills and resume. Utilized ReactJS and Express.js to build a responsive and animated website.

                    </p>
                    
                  </div >
                  <div className="Link-github">
                  <a
                    className="ad-btn"
                    href="https://my-portfolio-website-uvz6.onrender.com/"
                    target="_blank" rel="noreferrer"
                  >
                    Live Link
                    <FaLink className="icons" size={20}/>

                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/MdTouseefAkram/My-Portfolio"
                    target="_blank" rel="noreferrer"
                  >
                    Github Link
                    <FaGithub className="icons" size={20}/>
                  </a>
                  </div>
                </div>
              </div>
            </div>
  
        {/* Project 4 */}
            <div className="col-md-6 mb-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-End</span>
                  <img
                  
                    src={Razorpay} 
                    alt="project4"
                    
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">Tailwind CSS</span>
                  <span className="card-detail-badge">Animations</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                     Razorpay Clone
                    </h5>
                    
                  </div >
                  <div className="ad-title m-auto">
                    <p className="desc">
                    This is a fully responsive Razorpay clone website, a popular online payments platform in India. The website is built using HTML and Tailwind CSS.
                    </p>
                    
                  </div >
                  <div className="Link-github">
                  <a
                    className="ad-btn"
                    href="https://taupe-buttercream-ff09dd.netlify.app"
                    target="_blank" rel="noreferrer"
                    
                    
                  >
                    Live Link
                    <FaLink className="icons" size={20}/>

                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/MdTouseefAkram/Razorpay-Clone"
                    target="_blank" rel="noreferrer"
                  >
                    Github Link
                    <FaGithub className="icons" size={20}/>
                  </a>
                  </div>
                </div>
              </div>
            </div>
           
          
          </HeadShake>
        </div>
      </div>
    </>
  );
};

export default Projects;
