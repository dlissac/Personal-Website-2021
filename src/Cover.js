import React, {Component} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Gem from './Gem.svg';
import Heart from './Heart.svg';
import Customer from './Customer.svg';
import Teamwork from './Teamwork.svg';
import logo from './logo.png';
import './Cover.css';

class Cover extends Component {

  render() {
    return (
        <div className="cover-page">
            <Image className="logo" src={logo} />
            <Container className="containerPaddingCover">
                
                <Row md={4}>
                    <Col xs={12} className="center">
                        <Image src={Gem} />
                        <h4>Fine Craftmanship</h4>
                    </Col >
                    <Col xs={12} className="center">
                        <Image src={Heart} />
                        <h4>Built with Love</h4>
                    </Col>
                    <Col xs={12} className="center">
                        <Image src={Customer} />
                        <h4>Customer Oriented</h4>
                    </Col>
                    <Col xs={12} className="center">
                        <Image src={Teamwork} />
                        <h4>Teamwork</h4>
                    </Col>
                </Row>

                <Row md={2}>
                    <Col xs={12}>
                        <div className="intro">
                            <h1>Hello, world!</h1>
                            <h3>
                                I'm Devan, allow me to introduce myself. 
                            </h3>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className="intro">
                            <p>
                                I'm a full-stack developer in the SF Bay Area. My focus is in the front-end using the React.js framework, but I also love fixing bugs in the backend, generally a Java and Spring framework. I have also been responsible for developing UI and API automation tests in Python.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Cover;                