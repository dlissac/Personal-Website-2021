import React, {Component} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import email from './email.svg';
import linkedin from './linkedin.svg';
import resume from './resume.svg';
import Badge from 'react-bootstrap/Badge';
import './Connect.css';

class Connect extends Component {

  render() {
    return (
        <div className="connectPage">
            <div className="padConnectDiv"></div>
                <Container className="containterCustomPadding">
                    <div className="textColor connectStyle">
                        <Row>
                            <Col xs={12}><h1 className="centerConnect padConnectTitle">Connect</h1></Col>
                        </Row>
                        <Row>
                            <Col xs={1} md={1}></Col>
                            <Col xs={10} md={5}>
                                <h3 className="centerConnect">More Info</h3>
                                <div className="padIcon">
                                    <Image className="size" src={email} />
                                    <span> devanissac@gmail.com</span>
                                </div>
                                <div className="padIcon">
                                    <Image className="size" src={linkedin} />
                                    <span> <a href="https://www.linkedin.com/in/devanisaac/" title="LinkedIn">LinkedIn</a></span>
                                </div>
                                <div className="padIcon">
                                    <Image className="size" src={resume} />
                                    {' '}<a href="Professional_Resume_2020.pdf" target="_blank" title="Resume">Resume</a>
                                </div>
                            </Col>
                            <Col xs={1} className="hideOnLarge"></Col>
                            <Col xs={1} className="hideOnLarge"></Col>
                            <Col xs={10} md={5}> 
                                <h3 className="centerConnect">This website</h3>
                                <div className="padColumnContent">
                                    <h5>Powered by: <Badge variant="dark">Node.js</Badge> and <Badge variant="dark">React.js</Badge></h5>
                                    <h5>Styled with: <Badge variant="dark">CSS</Badge> and <Badge variant="dark">Bootstrap</Badge></h5>
                                    <h5>Host: <Badge variant="dark">Google Cloud Platform</Badge></h5>
                                    <h5>Repository: <Badge variant="dark">Github</Badge></h5>
                                </div>
                            </Col>
                            <Col xs={1} md={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className="centerConnect">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                                <div className="centerConnect"><p>&copy; 2020 devanissac.com</p></div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
    );
  }
}

export default Connect;