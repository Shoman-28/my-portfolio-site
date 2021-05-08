import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MainPage.css";
import myResume from '../../../myResume/Shoman Miah Resume (2).pdf';
import myImage from '../../../image/about.png'


const MainPage = () => {


  
  return (
    <section id="background-image">
      <div class="container">
        <div className="row pt-5"> 
        <div className="col-md-6">              
          <div class="cust-hello mt-5">

            <h3 class="des-line">Hey<span class="des-line-1"></span></h3>                                                            
            <h1>I'm SHOMAN</h1>
            <h2>Joniour Web Developer</h2> 
             
              <div className="d-flex" >  
            <Button className="mr-3 my-button2" as={Link} to="/about">About Me</Button>
            <a href={myResume} target="_blank">
              <Button className="ml-3 my-button">Resume</Button>
            </a>                  
            </div>        
          </div>
          </div>   
          <div className="col-md-6">
            <div className="my-img mt-5">
             
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
