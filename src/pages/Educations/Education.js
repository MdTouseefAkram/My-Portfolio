import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-4 text-center text-uppercase">
          Education Details
        </h2>
        <hr />

        <p className="pb-3 text-center">
        Hi, I am Md Touseef Akram. I have recently completed my Bachelor of Technology (B.Tech).

          </p>

        <VerticalTimeline lineColor="gray">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 – 2024 (L.E) "
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Computer Science & Engineering </h3>
            <h4 className="vertical-timeline-element-subtitle">
            Ramgarh Engineering College
            </h4>
            <p>
            CGPA: 8.09 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - 2021 "
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Diploma in Civil Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Government Polytechnic Nirsa, Dhanbad
            </h4>
            <p>
            Percentage: 80.81% 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Matriculation (10<sup>th</sup>)</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Leela Janki Public School, Bokaro
            </h4>
            <p>
            Percentage: 81.60%
            </p>
             
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
