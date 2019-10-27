import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Col, Row, Toast, ToastBody, ToastHeader,CustomInput } from 'reactstrap';
import {
  Card, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';

const delivery = (props) => {
  return (
    <Container>
    <div>
    <Row>
      <Nav>
        <NavItem>
          <NavLink href="#">Place order</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Track status</NavLink>
        </NavItem>
      </Nav>
    </Row>
      <hr />
    </div>
    <Form>
    <FormGroup>
    <Col>
      <Row>
      <Col xs="6">
      <Label for="rout">ROUT</Label>
      </Col>
      <Col xs="6">
      <Label for="rout">Delivery Info</Label>
      </Col>
      </Row>
      <Row>
        <Col xs="6">
        <FormGroup row>
        <Col sm={10}>
        <Input type="text" name="text" id="routpickup" placeholder="Pick up Location" />
        </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm={10}>
        <Input type="text" name="text" id="routdropoff" placeholder="Drop off Location" />
        </Col>
        </FormGroup>
        
        <Label for="service">ADDITIONAL SERVICES</Label>
        <FormGroup check>
        <FormGroup>
        <div>
          <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Purchase Service" />
          <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Round Trip" />
          <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Food Delivery" />
        </div>
        </FormGroup>
        </FormGroup>
        <Button>Submit</Button>

        </Col>
        <Col xs="6">
        <Card>
        <CardBody>
        <FormGroup>
          <Input type="text" name="name" id="Name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
          <Input type="text" name="Phone" id="Phone" placeholder="Phone Number" />
          </FormGroup>
          <FormGroup>
          <Input type="text" name="other" id="other" placeholder="Other" />
          </FormGroup>
          <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <Button>Cancle</Button>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <Button color="info">Save</Button>{' '}
          </Col>
          </Row>
        </CardBody>
        </Card>
        </Col>
      </Row>
    </Col>
    </FormGroup>
    </Form>
    </Container>    
  );
}

export default delivery;