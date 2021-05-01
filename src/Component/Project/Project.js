import React from 'react';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import ServiceImg from '../../image/Service-img.jpg'
import FoodShop from '../../image/FoodShop.jpg'
import RaideSharing from '../../image/RaideSharing.jpg'

const myProject =[
    {   name: 'Digital Service Center',
        image:ServiceImg,
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorum enim cum voluptas ad.',
        liveLink:'https://digital-service-center-459b7.web.app',        
        gitLink:'https://github.com/Shoman-28/Digital-Service-Center'
    },
    {   name: 'Food Shop',
        image:FoodShop,
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorum enim cum voluptas ad.',
        liveLink:'https://fresh-food-2ee90.web.app',       
        gitLink:'https://github.com/Shoman-28/food-corner'
    },
    {   name: 'Raide Sharing',
        image:RaideSharing,
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorum enim cum voluptas ad.',
        liveLink:'https://bd-raider.web.app',
        gitLink:'https://github.com/Shoman-28/BD-Rider-Share',
    }

]
const Project = () => {
    return (
        <div className="container">
            <h1 className="text-center">New Project</h1>
            <div className="w-74 row">
               
                {
                  myProject.map(p =><ProjectDetails projcet={p}></ProjectDetails>)  
                }

            </div>
        </div>
    );
};

export default Project;