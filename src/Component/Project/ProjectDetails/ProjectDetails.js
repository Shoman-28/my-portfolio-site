import React from 'react';
import './ProjectDetails.css'
import { Card } from 'react-bootstrap';

const ProjectDetails = (props) => {
    console.log(props)
const {name, details, gitLink, liveLink, image}= props.projcet
    
   
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image}  />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <div className="d-flex justify-content-between">
                        <a href={gitLink} target="_blank">GitHub link</a> <br/>
                        <a href={liveLink} target="_blank">Live link</a>
                    </div>
                </Card.Body>
            </Card>
            
            
        </div>
    );
};

export default ProjectDetails;