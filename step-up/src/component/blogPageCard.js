import React from 'react';
import {
  Card, CardText, CardBody,
  CardHeader, Button
} from 'reactstrap';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import "./css/blogPageCard.css";

const MainBlog = (props) => {



  return (
    <div className="blog-card" >
      <Card >
      <CardHeader>Get Ready for Battle</CardHeader>
        <CardBody>
          <CardText>
            <Form>
              <FormGroup row>
                <Label for="exampleText" sm={2}>Three Things to be Grateful For:</Label>
                <Col sm={10}>
                  <Input type="textarea" name="gratitude" id="exampleText" onChange={props.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={2}>Daily Affirmations:</Label>
                <Col sm={10}>
                  <Input type="textarea" name="affirmations" id="exampleText" onChange={props.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={2}>Today's Goals:</Label>
                <Col sm={10}>
                  <Input type="textarea" name="goals" id="exampleText" onChange={props.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={2}>The Story of Today:</Label>
                <Col sm={10}>
                  <Input type="textarea" name="freeform" id="exampleText" onChange={props.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button onClick={props.handleBlog}>Post</Button>
                </Col>
              </FormGroup>
            </Form>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default MainBlog;