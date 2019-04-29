import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class LogIn extends React.Component {
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
          <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
          <ModalBody>
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button>Submit</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LogIn;