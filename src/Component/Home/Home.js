import React from 'react';
import './Home.css';
import NebBar from '../Header/NevBar/NebBar';
import MainPage from './MainPage/MainPage';

const Home = () => {
    return (
        <div>
            
                <NebBar ></NebBar>           
            
            
                <MainPage></MainPage>
            
        </div>
    );
};

export default Home;