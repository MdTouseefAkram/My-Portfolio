import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import {BsGithub, BsLinkedin, BsTwitterX} from "react-icons/bs";
import contact from "../../assets/ContactImg.jpg"
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please Provide all fields");
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      //validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" contact" id="contact">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
         Contact Us
        </h2>
        <hr />
        <p className="pb-3 text-center">
        ✨ Here you can contact with me! 🎨🔧


        </p>
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src={contact} 
                      alt="contact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row icons">
                      <h6>
                        Contact With
                        <a href="https://www.linkedin.com/in/md-touseef-akram-ba28b1249/" target="_blank" rel="noreferrer"><BsLinkedin color="blue" size={30} className="ms-2" /></a>
                       <a href="https://github.com/MdTouseefAkram" target="_blank" rel="noreferrer"><BsGithub color="black" size={30} className="ms-2" /></a>
                       <a href="https://x.com/MdTouseefAkram" target="_blank" rel="noreferrer"><BsTwitterX color="black" size={30} className="ms-2"/></a>
                        
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
