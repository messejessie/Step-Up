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

    handleLogIn = event => {
        event.preventDefault();
        axios.get('/api/member', this.state)
            .then(response => console.log(response));
    }

    render() {
        const {username, password} = this.state
        return (
            <Form onSubmit={this.handleLogIn}>
                <FormGroup>
                    <Label > UserName: </Label>
                    <Input type="text" value={username} id="username" placeholder="Username" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password: </Label>
                    <Input type="password" value={password} id="examplePassword" placeholder="Placeholder" onChange={this.handleChange} />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}