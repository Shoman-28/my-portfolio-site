import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MainPage.css";
import myResume from '../../../myResume/Shoman Miah Resume (2).pdf'

const MainPage = () => {
  return (
    <section id="background-image">
      <div class="container">
        <div class="cust-hello">
            <h3>Hey______</h3>
            <h1>I'm SHOMAN</h1>
            <h2>Joniour Web Developer</h2>          
            <div class="d-flex flex-row flex-wrap">
              <Button className="mr-3 my-button" as={Link} to="/about">About Me</Button>
              <a href={myResume} target="_blank">
                <Button className="ml-3 my-button">Resume</Button>
              </a>
              
            </div>          
        </div>
      </div>
    </section>
  );
};

export default MainPage;
