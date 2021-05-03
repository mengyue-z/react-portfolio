import React from "react";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import "../App.css";
import { VscGithub } from 'react-icons/vsc';
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import resume from "../images/resume mengyue Zhang.pdf"

function ContactCard() {
  return (

    <Col md={4}>
    <Card className="aboutme-card">
    <Card.Body>
      <Card.Title>Contact Me</Card.Title>
      <Card.Text>
      <h5>Name: Mengyue Zhang</h5>
        <h5>Phone Number: 240-413-0493</h5>
        <h5>Email: mengyue.z@outlook.com</h5>
        <a class="mr-2" href="https://www.linkedin.com/in/mengyue-zhang/" target="blank"><TiSocialLinkedinCircular size="40" className = "icons"/></a>
        <a href="https://github.com/mengyue-z" target="blank"><VscGithub className = "icons" size="30"/></a>
      </Card.Text>
      <Button variant = "outline-dark" href={resume} target="_blank">View My Resume</Button>
    </Card.Body>
  </Card>
  </Col>

  );
}

export default ContactCard;