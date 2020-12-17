import React, {Component} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import softwareSvg from './software.svg';
import education from './education.svg';
import './Experience.css';

class Experience extends Component {

  render() {
    return (
        <div className="page-height">
            <Container className="containerPadding">
                <Row className="box-shadow">
                    <Col className="padTop">
                        <Row md={2}>
                            <Col xs={12} md={5}>
                                <h1 className="headerCenter">Experience</h1>
                                <div className="imageScale">
                                    <Image src={softwareSvg} fluid/>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <h5 className="headerCenter">
                                    <strong>Cisco Systems:</strong> June 2018 - Present 
                                </h5>
                                <br></br>
                                <h6>
                                    <strong>UI:</strong>{' '}
                                    <Badge variant="dark">React.js</Badge>{' '}
                                    <Badge variant="dark">CSS</Badge>{' '}
                                    <Badge variant="dark">Javascript (ES6+)</Badge>{' '}
                                    <Badge variant="dark">HTML</Badge>{' '}
                                    <Badge variant="dark">npm</Badge>{' '}
                                    <Badge variant="dark">backbone.js</Badge>{' '}
                                    <Badge variant="dark">jQuery</Badge>{' '}
                                </h6>
                                <p>
                                    At Cisco I mainly built UI workflows across many UI plugins for our large enterprise networking applications. I took sole ownership of my feature requests and implemented the user requirements using a variety of frontend frameworks and technologies.
                                </p>
                                <h6>
                                    <strong>Backend:</strong>{' '}
                                    <Badge variant="dark">Java</Badge>{' '}
                                    <Badge variant="dark">Spring</Badge>{' '}
                                    <Badge variant="dark">Hibernate</Badge>{' '}
                                    <Badge variant="dark">SQL</Badge>{' '}
                                    <Badge variant="dark">Maven</Badge>{' '}
                                </h6>
                                <p>
                                    I took part ownership in the backend for our feature requests. I wrote JUnit tests and fixed bugs in our API controllers as well as several other backend services.
                                </p>
                                <h6>
                                    <strong>Test Automation:</strong>{' '}
                                    <Badge variant="dark">Python</Badge>{' '}
                                    <Badge variant="dark">Jenkins</Badge>{' '}
                                    <Badge variant="dark">Bash Scripts</Badge>{' '}
                                    <Badge variant="dark">Selenium</Badge>{' '}
                                </h6>
                                <p>
                                    I developed UI and API test automation in Python using Py.test and Selenium. I made sure automated tests ran during product builds using Jenkins and bash scripts, and I even created a Jenkins job to run on demand.
                                </p>
                            </Col>
                        </Row>
                        <br></br>
                        <Row md={2}>
                            <Col xs={12} md={5}>
                                <h1 className="headerCenter">Education</h1>
                                <div className="imageScale">
                                    <Image src={education} fluid/>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <h5 className="headerCenter">
                                    <strong>NC State University:</strong> Bachelor of Computer Science
                                </h5>
                                <br></br><br></br>
                                <h6>
                                    <strong>Major GPA:</strong>{' '}
                                    <Badge variant="dark">3.6</Badge>
                                </h6>
                                <p>
                                    I completed my Bachelor of Computer Science at NC State University in May of 2018 with Magna Cum Laude honors. Directly after
                                    my graduation I moved to San Jose, CA to begin my career in tech.
                                </p>
                                
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Experience;