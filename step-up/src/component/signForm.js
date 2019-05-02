import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class SignUpForm extends React.Component {
    state = {
        name: '',
        email: '',
        username: '',
        password:'',
        email: ''
    }

    // componentDidMount(){
        // this.setState
    // }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [ name ]: value
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
                    <Label >Name: </Label>
                    <Input type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label >Email: </Label>
                    <Input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label > UserName: </Label>
                    <Input type="text" name="username" id="username" placeholder="Username" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password: </Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Placeholder" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label >Age: </Label>
                    <Input type="text" name="age" id="age" placeholder="Age" onChange={this.handleChange}/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}