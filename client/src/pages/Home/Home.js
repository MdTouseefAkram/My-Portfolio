import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import Fade from "react-reveal/Fade";

import Resume from "../../assets/docs/Resume.pdf"
const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={18} />
          ) : (
            <BsFillSunFill size={18} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
          
            
            <h2>Hey I'm Md Touseef Akram </h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Coder!",
                    "Full Stack Developer!",
                    "MERN Stack Developer!",
                   
                    "Backend Developer!",
                    "Frontend Developer!",
                    
                    
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="mailto:mdtouseefakram5@gmail.com?subject=Hiring Inquiry&body=Dear Md Touseef Akram,%0D%0AI am interested in hiring you for a position.%0D%0APlease find the details below:%0D%0A%0D%0A[Insert details here]%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download={Resume}>
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
