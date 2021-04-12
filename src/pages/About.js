import React from "react";
import { Card } from 'react-bootstrap';
import "../App.css";
import { Container, Row, Col} from 'react-bootstrap';
import ContactCard from "../components/ContactCard";

function About() {
  return (

    <Row>
    <Col md={8}>
    <Card className="aboutme-card">
    <Card.Body>
      <Card.Title>About Me</Card.Title>
      <img src = "https://mengyue-z.github.io/Portfolio/images/aboutme.jpeg" className="img-fluid float-left mr-2 mb-2 img-thumbnail"/>
      <Card.Text>
      Hello, my name is Mengyue Zhang. I am a recent graduate from George Washington University Full Stack Coding Bootcamp and current working towards a MS of Software Development degree in Boston University.
      <br/><br/>In the intensive bootcamp program, I got the chance to practice my understanding of the full-stack development field and have advanced many necessary technical skills for both front-end and back-end, including HTML, CSS, Javascipt, Node.js, React.js, SQL and MongoDB.
      <br/><br/>Thanks for visiting my site! Please feel free to reach me at the contact page.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <ContactCard />
</Row>

  );
}

export default About;