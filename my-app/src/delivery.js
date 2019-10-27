import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Col, Row} from 'reactstrap';

const delivery = (props) => {
  return (
    <Container>
    <div>
    <Row>
      <p>List Based</p>
    </Row>
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
      <Label for="rout">ROUT</Label>
      <Row>
        <Col xs="6">
      <Input type="textarea" name="text" id="routpickup" placeholder="Pick up Location" />
      <Input type="textarea" name="text" id="routdropoff" placeholder="Drop off Location" />
        </Col>
        <Col xs="6">.col-6
        </Col>
      </Row>
    </FormGroup>
    <Label for="service">ADDITIONAL SERVICES</Label>
    <FormGroup check>
      <Row>
        <Label check>
          <Input type="checkbox" />{' '}
          Purchase Service
        </Label>
      </Row>
      <Row>
        <Label check>
          <Input type="checkbox" />{' '}
          Round Trip
        </Label>
      </Row>
      <Row>
        <Label check>
          <Input type="checkbox" />{' '}
          Food Delivery
        </Label>
      </Row>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </Container>    
  );
}

export default delivery;