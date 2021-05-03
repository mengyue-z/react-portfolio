import React from "react";
import { Card, Button,Col } from 'react-bootstrap';
import "../App.css";

function Project(props) {
  return (
    <div className="col-lg-4 col-md-6 portfoliocards">
    <Card className ="project-cards">
                                    <Card.Img varaint="top" className="card-img-top" src={props.imgUrl} alt="portfolio" />
                                    <Card.Body>
                                    <Card.Title className="card-title" id="project-title">{props.title}</Card.Title>
                                    <Card.Text className="card-text"> {props.description}</Card.Text>
                                    <Button href={props.repo} variant ="outline-dark" size="sm" className="project-btn">
                                            View GitHub Repo
                                     </Button>
                                     <Button href={props.live} variant ="outline-dark" size="sm" className="project-btn">
                                     View Deployed App
                                    </Button>
                                    </Card.Body>
                                    <Card.Footer><small>{props.techUsed}</small></Card.Footer>
                                </Card>
                                </div>

  );
}

export default Project;

