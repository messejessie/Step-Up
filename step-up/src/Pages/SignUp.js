import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="Name" sm={2}>Name</Label>
                <Col sm={10}>
                  <Input type="Name" name="Name" id="Name" placeholder="with a placeholder" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="Email" sm={2}>Email</Label>
                <Col sm={10}>
                  <Input type="Email" name="Email" id="Email" placeholder="with a placeholder" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="Age" sm={2}>Age</Label>
                <Col sm={10}>
                  <Input type="Age" name="Age" id="Age" placeholder="with a placeholder" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="Username" sm={2}>Email</Label>
                <Col sm={10}>
                  <Input type="Username" name="Username" id="Username" placeholder="with a placeholder" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Password" sm={2}>Password</Label>
                <Col sm={10}>
                  <Input type="Password" name="Password" id="Password" placeholder="password placeholder" />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button herf='/aboutus'>Submit</Button>
              </Col>
            </FormGroup>
          </ModalFooter>
        </Modal>
      </div >
    );
  }
}

export default SignUp;