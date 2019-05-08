import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import axios from 'axios';
//import apiMember from '../utils/apiMember';

const SignUpForm = (props) => {
    
        return (
            <Form >
                <FormGroup>
                    <Label >Name: </Label>
                    <Input type="text" name="name" id="name" value={props.name} placeholder="Name" onChange={props.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label >Email: </Label>
                    <Input type="email" name="email" id="email" value={props.email} placeholder="Email" onChange={props.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label > UserName: </Label>
                    <Input type="text" name="username" id="username" value={props.username} placeholder="Username" onChange={props.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password: </Label>
                    <Input type="password" name="password" id="examplePassword" value={props.password} placeholder="Password" onChange={props.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label >Age: </Label>
                    <Input type="text" name="age" id="age" placeholder="Age" value={props.age} onChange={props.handleChange}/>
                </FormGroup>
                <Button onClick={props.handleRegister}>Submit</Button>
            </Form>
        );
    }
    
export default SignUpForm;