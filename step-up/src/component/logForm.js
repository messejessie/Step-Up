import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class LogInForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    // componentDidMount(){
    // this.setState
    // }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleRegister = event => {
        event.preventDefault();
        axios.post('/api/member', this.state)
            .then(response => console.log(response));
    }

    render() {
        return (
            <Form onSubmit={this.handleRegister}>
                <FormGroup>
                    <Label > UserName: </Label>
                    <Input type="text" name="username" id="username" placeholder="Username" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password: </Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Placeholder" onChange={this.handleChange} />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}