import React from 'react';
import './Home.css';
import NebBar from '../Header/NevBar/NebBar';
import MainPage from './MainPage/MainPage';
import About from '../About/About';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div className="homePage">
            
                <NebBar ></NebBar>      
            
            
                <MainPage></MainPage>
                <About/>
                <Project/>
            
        </div>
    );
};

export default Home;