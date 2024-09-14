import React from "react";
import { MdMapsHomeWork  } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt- mb-4 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />

          <p className="pb-3 text-center heading">
          Hi, I am Md Touseef Akram. Below is a showcase of my work experience with various technologies.

          </p >
          <VerticalTimeline lineColor="gray">
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{background: "white", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date=" Feb 2024 - June 2024"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdMapsHomeWork  />}
            >
              <h3 className="vertical-timeline-element-title">
                Data Structures and Algorithms (DSA)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              C++
              </h4>
              <p>
              Solving DSA Problems on LeetCode and GeeksforGeeks and also practices on other platforms like CodeStudio.
              </p>
            </VerticalTimelineElement>

{/*  */}
<VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{background: "white", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="June 2023 - July 2023"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdMapsHomeWork  />}
            >
              <h3 className="vertical-timeline-element-title">
              Web Development and Designing Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              The Sparks Foundation
              </h4>
              <p>
              During my internship at The Sparks Foundation, I had the opportunity to work in Frontend Web Development using HTML, CSS and JavaScript. I regularly submitted work reports for my assignments to the team members, outlining my progress on assignments. My responsibilities included fixing bugs, resolving error-related issues, and contributing to the project tasks as assigned.
              </p>
            </VerticalTimelineElement>
{/*  */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{background: "white", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="May 2023 - June 2023"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdMapsHomeWork  />}
            >
              <h3 className="vertical-timeline-element-title">
              Web Development Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              InternPe
              </h4>
              <p>
             I learned the fundamentals of HTML, CSS and JavaScript and assisted in development of the front end of web application using these technologies.
              </p>
            </VerticalTimelineElement>


          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
