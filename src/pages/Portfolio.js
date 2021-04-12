import React from "react";
import { Card, Row,Col, CardDeck, Container} from 'react-bootstrap';
import "../App.css";
import Project from "../components/Project"
import Projects from "../components/ProjectDetails";
function Portfolio() {
  return (
    <Row>
    <Card>
    <Card.Body>
        <Card.Title>Portfolio</Card.Title>
            <CardDeck>
            {Projects.map((project) => {
        return(
        <Project 
        imgUrl={project.imgUrl}
        title={project.title}
        description={project.description}
        repo ={project.repo}
        live={project.live}
/>)
    })}
            </CardDeck>
        </Card.Body>
    </Card>
    </Row>


  );
}

export default Portfolio;