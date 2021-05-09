import React from 'react';
import './About.css';
import aboutImage from '../../image/about.png'
import { Button } from 'react-bootstrap';
import myResume from '../../myResume/Shoman Miah Resume (2).pdf'

const About = () => {
    return (
        <section className="about-secton mt-0 pt-5">
            <div class="container">
                <div class="about-ful">
                    <div class="shadow-lg p-3 pt-5 mb-5 bg-white rounded">
                        <div class="row">
                            <div class="col-lg-6">
                            <div class="about-img">
                                <img src={aboutImage} alt=""/>
                            </div>
                            </div>
                            <div class="col-lg-6 sha ">
                                <div class="about-me">
                                <div class="line">
                                    <span class="line-1"></span><br/>
                                    <span class="line-2"></span><br/>
                                    <span class="line-3"></span>
                                </div>
                                <h1>About Me</h1>
                                <h3>website designer</h3>
                                <p>Hello, My name is Shoman. I am a Website Designer. If you have any project or if you want to make a website for business contact me. I make it as soon as possible. You really like my work, if you don't I change this until you as I give you a satisfactory result.</p>
                                
                                    <a href={myResume} target="_blank"> <Button className="ml-3 my-button">Resume</Button> </a>      
                                
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>  
                  
            </div>
        </section>
    );
};

export default About;