import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Container, Row, Col,} from 'reactstrap';
import { CardGroup,CardSubtitle, CardBody,Media,Badge, Breadcrumb, BreadcrumbItem ,Toast, ToastBody, ToastHeader,Alert } from 'reactstrap';

const logo = require('./logo.jpg');
const service = require('./service.png');
const kmitl = require('./kmitl.png');
const price = require('./price.png');
const Firstpage = (props) => {
  return (

        /*<Jumbotron fluid body inverse style={{ backgroundColor: '#D6EAF8', borderColor: '#D6EAF8' }}>*/
        <Container fluid body inverse style={{ backgroundColor: '#D6EAF8', borderColor: '#D6EAF8' }} >  
        <img class="media-obj" src={kmitl} height="88" width = "1056"/>        
        <p></p>
        <Col sm={{ size: 10, order: 1, offset: 0}}>
        <h5> This is the fastest delivery service in king mongkut's institute of technology ladkrabang.</h5>
        <hr className="my-2" />
        <Row>
        <Col sm={{ size: 10, order: 1, offset: 0}}>Call through the website 24 hours.</Col></Row>
        <Row>
        <Col sm={{ size: 10, order: 1, offset: 0}}>Calculated by distance Delivery service.</Col></Row>
        <p></p>
        </Col>
            <Row>
                <Col xs="6" sm="4">
                </Col>
                <Col xs="6" sm="5">
                <p className="lead">
                <Button color="secondary" size="lg">Register Now</Button>{' '}
                </p>
                </Col>
            </Row>
        <Col sm={{ size: 6, order: 2, offset: 2 }}>
        <p>
        <img class="media-obj" src={service} height="400" width = "600"/> 
        </p>
        </Col>
        <Col sm={{ size: 6, order: 2, offset: 2 }}>
        <p>
        <img class="media-obj" src={price} height="300" width = "600"/> 
        </p>
        </Col>   
            <Row>
            <CardGroup>
                <Card >
                    <CardBody>
                        <CardSubtitle><h5>CONTECT</h5></CardSubtitle>
                        <CardText>
                            <Row>
                                <Col sm={{ size: 'auto', offset: 1 }}>
                                Tel. (02)22222222
                                </Col>
                                <Col sm={{ size: 'auto', offset: 1 }}>
                                kmitl.deliver@kmitl.ac.th
                                </Col>
                                <Col sm={{ size: 'auto', offset: 1 }}>
                                www.kmitl-delivery.com
                                </Col>
                            </Row>
                        </CardText>
                    </CardBody>
                </Card>
                <Card >
                    <CardBody>
                    <CardSubtitle><h5>PRODUCT</h5></CardSubtitle>
                    <CardText>
                                <Row>
                                <Col sm={{ size: 'auto', offset: 1 }}>
                                DRIVER
                                </Col>
                                <Col sm={{ size: '10', offset: 1 }}>
                                DELIVER
                                </Col>
                                <Col sm={{ size: 'auto', offset: 1 }}>
                                BUSINESS
                                </Col>
                                <Col sm={{ size: '10', offset: 1 }}>
                                PRICING
                                </Col>
                                </Row>
                        </CardText>
                    </CardBody>
                </Card>
                <Card >
                    <CardBody>
                    <CardSubtitle><h5>LEGAL</h5></CardSubtitle>
                            <Row>
                                <Col sm={{ size: 'auto', offset: 1 }}>
                                PRIVACY POLICY
                                </Col>
                                <Col sm={{ size: 'auto', offset: 1 }}>
                                TERMS AND CONDITIONS
                                </Col>
                            </Row>
                    </CardBody>
                </Card>
            </CardGroup>
            </Row>
        </Container>
      /*</Jumbotron>*/
 

  );
};

export default Firstpage;