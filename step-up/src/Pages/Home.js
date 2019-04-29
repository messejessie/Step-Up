import React, {Component} from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { Button } from 'reactstrap';
import { Jumbotron} from 'reactstrap';
import LogIn from './LogIn';
import SignUp from './SignUp'
//import MainNav from "../component/nav"
// import Home from '../src/component/Jumbotron';


class HomePage extends Component {
    state = {
        username: "",
        password: ""
    }


render() {
    return (
        <div>
        <br />
        <Jumbotron>
          <h1 className="display-3">Welcome to Step-Up!</h1>
          <p className="lead">We are so grateful to have you!</p>
          <hr className="my-2" />
          <p>Sign up to learn more or Log-In to continue stepping up</p>
          <p className="lead">
            <LogIn herf="/login">Log In</LogIn>
            <SignUp herf= "/signup">Sign up</SignUp>
          </p>
        </Jumbotron>
      </div>
        )
  }
};
export default HomePage;