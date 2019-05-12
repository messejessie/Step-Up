import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

const MainBlog = (props) => {



  return (
    <div>
      <Card >
        <CardBody>
          <CardTitle>Dive into Happiness</CardTitle>
          <CardText>
            <Form>
              <FormGroup row>
                <Label for="exampleText" sm={2}>Three things you are grateful for:</Label>
                <Col sm={12}>
                  <Input type="textarea" name="gratitude" id="exampleText" onChange={props.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={2}>Daily Affirmations:</Label>
                <Col sm={12}>
                  <Input type="textarea" name="affirmations" id="exampleText" onChange={props.handleChange} />
                </Col>
                <FormGroup row>
                  <Label for="exampleText" sm={2}>Today Goals:</Label>
                  <Col sm={12}>
                    <Input type="textarea" name="goals" id="exampleText" onChange={props.handleChange} />
                  </Col>
                  {/* <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Col sm={12}>
                    <Input type="textarea" name="text" id="exampleText" />
                    </Col>
                  </FormGroup> */}
                  <FormGroup row>
                    <Label for="exampleText" sm={2}>Finally whats on your mind?:</Label>
                    <Col sm={12} >
                      <Input type="textarea" name="freeform" id="exampleText" onChange={props.handleChange} />
                    </Col>
                  </FormGroup>
                </FormGroup>
              </FormGroup>
            </Form>
          </CardText>
          <Button onClick={props.handleBlog}>Post</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MainBlog;