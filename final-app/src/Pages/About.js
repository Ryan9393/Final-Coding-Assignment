import React from "react";
import Card from 'react-bootstrap/Card';
import MyImage from './download-23.jpg';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import MyImage2 from './41438-b580.jpg';
import myImage3 from './housers.jpg';
import myImage4 from './housersers.jpg';

function About(){

    return(
        <div className='app'>
        <Container>
            <Row>
                <Col>
                
                <Carousel className="mt-3">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyImage2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myImage3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myImage4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                
                </Col>
                <Col>
                    <Card style={{ width: '40rem' }} className="mt-3">
                    <Card.Img variant="top" src={MyImage} />
                    <Card.Body>
                        <Card.Title>HOUSE</Card.Title>
                    <Card.Text>
                        This entire project is based on house because I used the house api from the previous weeks. sorry if its too much house.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
      </Container>
      </div>
    );
}

export default About;