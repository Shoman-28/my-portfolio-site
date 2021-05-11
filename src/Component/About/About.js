import React from "react";
import "./About.css";
import aboutImage from "../../image/about.png";
import { Button } from "react-bootstrap";
import myResume from "../../myResume/Shoman Miah Resume (2).pdf";

import Fade from 'react-reveal/Fade';
const About = () => {
  return (
    <div className="homePage">
        <div class="container pt-5 pb-5  ">
            <Fade left>

                
                
                <h1 className="mb-5">About Me</h1>
                
              
            </Fade>
            {/* <Fade right cascade> */}
                
                <div class="p-3 pt-5 about-section">
                    <div class="row">
                        <div class="col-lg-6">
                        
                            <div class="about-img">
                            <Fade bottom left>
                                <img src={aboutImage} alt="" />
                                </Fade>
                            </div>
                      
                        </div>
                        <div class="col-lg-6 sha ">
                            
                                
                            <div class="about-me">
                                <div class="line mt-5 mb-5 ">
                                    <span class="line-1"></span>
                                    <br />
                                    <span class="line-2"></span>
                                    <br />
                                    <span class="line-3"></span>
                                </div>
                            <Fade top right>
                                <h3>website designer</h3>
                                <p>
                                I am a front-end web developer. I have been working as a
                                professional web developer in Bangladesh for almost one year.
                                I like programming. My favorite language is JavaScript. I have
                                experienced all the expectations of web development using
                                JavaScript technology. Every day I try to solve some problems
                                using JavaScript. My main focus is to make the website
                                mobile-friendly, SEO-friendly, browser compatible and coding
                                in the most optimized way so that it performs well.
                                </p>

                                <a href={myResume} target="_blank">
                                {" "}
                                <Button variant="success" className="ml-3">Resume</Button>{" "}
                                </a>
                                </Fade>
                            </div>
                           
                        </div>
                    </div>
                </div>
               
            {/* </Fade> */}
        </div>
    </div>
  );
};

export default About;
