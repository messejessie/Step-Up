import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import axios from 'axios';
//import apiMember from '../utils/apiMember'

const LogInForm = (props) => {
        return (
            <Form>
                <FormGroup>
                    <Label > UserName: </Label>
                    <Input type="text" name="username" value={props.username} id="username" placeholder="Username" onChange={props.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password: </Label>
                    <Input type="password" name="password" value={props.password} id="examplePassword" placeholder="Placeholder" onChange={props.handleChange} />
                </FormGroup>
                <Button onClick={props.handleLogin}>Submit</Button>
            </Form>
        );
    }

export default LogInForm;