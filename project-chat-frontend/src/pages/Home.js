import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="my-style d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div className="main-div">
          <h1>Exchange();</h1>
          <p>A social chat app</p>
          <LinkContainer to="/chat">
            <Button className="btn" variant="success">
              Get Started <i className="fa-brands fa-rocketchat"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg"></Col>
    </Row>
  );
}

export default Home;
