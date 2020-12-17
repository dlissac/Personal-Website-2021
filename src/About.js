import React, {Component} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import profilePic from './profilePic.jpg';
import './About.css';

class About extends Component {

  render() {
    return (
        <div className="page-height">
            <Container className="containerPadding">
                <Row className="box-shadow" md={2}>
                    <Col xs={12}>
                        <Image className="sizing float-left box-shadow padRight" src={profilePic} roundedCircle />
                        <div className="divPad">
                            <h3 className="aboutText center">About Me</h3>
                                <p>
                                    Hi I'm Devan Issac.
                                </p>

                                <p>
                                    I'm a young software engineer working on enterprise level software applications in the CA, Bay Area. I pride myself on delivering quality code to the varity of unique problems my scrum team faces each day.
                                </p>

                                <p>
                                    Originally from North Carolina, I moved to the Bay Area shortly after graduation from NC State University to pursue my dreams of working for the best tech companies in Silicon Valley. Currently happily employed at Cisco Systems
                                    where I get valuable hands on experience in the Software Development world every day. In my free time I love to lift weights at the gym, or play a few rounds of pickup basketball around the parks in the Bay Area.
                                </p>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className="divPad">
                            <h3 className="aboutText center">Basic Information</h3>
                            <br></br>
                            <Row>
                                <Col><h5 className="padLeft"><strong>Education:</strong></h5></Col>
                                <Col xs={7}><h6>North Carolina State University</h6></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col><h5 className="padLeft"><strong>Work:</strong></h5></Col>
                                <Col xs={7}><h6>Software Engineer - Cisco Systems</h6></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col><h5 className="padLeft"><strong>Email:</strong></h5></Col>
                                <Col xs={7}><h6>devanissac@gmail.com</h6></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col><h5 className="padLeft"><strong>Phone:</strong></h5></Col>
                                <Col xs={7}><h6>828 - 320 - 6302</h6></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col><h5 className="padLeft"><strong>Location:</strong></h5></Col>
                                <Col xs={7}><h6>San Jose, CA</h6></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col><h5 className="padLeft"><strong>Work Auth:</strong></h5></Col>
                                <Col xs={7}><h6>Citizen</h6></Col>
                            </Row>
                            <br></br>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default About;                