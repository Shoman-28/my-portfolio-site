import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MainPage.css";
import myResume from '../../../myResume/Shoman Miah Resume (2).pdf';
import Fade from 'react-reveal/Fade';

const MainPage = () => {


  
  return (
    <section id="background-image">
      <div className="container">           
            <div className="cust-hello mt-5">
              <Fade top>
                <h3 class="des-line">Hey<span class="des-line-1"></span></h3>                                                            
                <h1>I'm SHOMAN</h1>
                <h2>Joniour Web Developer</h2>              
                <div className="d-flex">  
                  <Button variant="success" className="mr-3" as={Link} to="/about">About Me</Button>
                  <a href={myResume} target="_blank">
                    <Button variant="success" className="ml-3">Resume</Button>
                  </a>
                </div>
              </Fade> 
            </div>
         
  
      </div>
    </section>
  );
};

export default MainPage;
