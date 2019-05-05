import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class LogInForm extends React.Component {
    state = {
        username: '',
        password: '',
        memberid: ''
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
            .then(response => {
                sessionStorage.setItem('authenticated', true);
                this.setState({
                    memberid: response.data._id,
                }, () => {
                    this.props.history.push({
                        pathname: '/profile',
                        state: {memberid: this.state.memberid}
                    })
                })
            });
    }

    render() {
        const { username, password } = this.state
        return (
            <Form onSubmit={this.handleLogIn}>
                <FormGroup>
                    <Label > UserName: </Label>
                    <Input type="text" name="username" value={username} id="username" placeholder="Username" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password: </Label>
                    <Input type="password" name="password" value={password} id="examplePassword" placeholder="Placeholder" onChange={this.handleChange} />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}