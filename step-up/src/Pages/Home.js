import React, { Component } from '../../node_modules/react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Jumbotron } from '../../node_modules/reactstrap/lib';
import LogInForm from '../component/logForm';
import SignUpForm from '../component/signForm'
import apiMember from '../utils/apiMember';
//import MainNav from "../component/nav"
// import Home from '../src/component/Jumbotron';
import './css/home.css';
 

class HomePage extends Component {
  state = {
    username: '',
    password: '',
    memberid: '',
    email: '',
    age: '',
    name: '',
    showLoginModal: false,
    showSignupModal: false
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  modalForm = event => {
    event.preventDefault();
    this.setState({ showLoginModal: true });
  }

  signModalForm = event => {
    event.preventDefault();
    this.setState({ showSignupModal: true })
  }

  handleRegister = event => {
    console.log('this state', this.state);
    const memberData = { name: this.state.name, email: this.state.email, age: this.state.age, username: this.state.username, password: this.state.password };
    console.log('member data', memberData);
    event.preventDefault();
    apiMember.saveMember(memberData)
      .then(response => {
        sessionStorage.setItem('authenticated', true);
        this.setState({
          memberid: response.data._id,
        }, () => {
          this.props.history.push({
            pathname: '/aboutus',
            state: { memberid: this.state.memberid }
          })
        })

        console.log(response)
      });
  }

  
  handleLogin = event => {
    event.preventDefault();
    //console.log('this state', this.state);
    const data = { username: this.state.username, password: this.state.password };
    // const vaild = { username: this.state.username, password: this.state.password };
    apiMember.signInMember(data)
      .then(response => { 
        // if(data !== vaild){
        //   alert("Incorrect Username or password")
        // }else{
        console.log('response', response);
        sessionStorage.setItem('authenticated', true);
        sessionStorage.setItem('memberid', response.data[0]._id);
        this.props.history.push('/profile');
        // }
      });

}
  
  render() {
    console.log('the state', this.state);
    return (
      <div >
        <Modal isOpen={this.state.showLoginModal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
          <ModalBody>
            <LogInForm
              handleLogin={this.handleLogin}
              username={this.state.username}
              password={this.state.password}
              handleChange={this.handleChange}
            />
          </ModalBody>
        </Modal>
        <Modal isOpen={this.state.showSignupModal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
          <ModalBody>
            <SignUpForm
              handleRegister={this.handleRegister}
              username={this.state.username}
              password={this.state.password}
              name={this.state.name}
              email={this.state.email}
              age={this.state.age}
              handleChange={this.handleChange}
            />
          </ModalBody>
        </Modal>
        <br />
        <div className ='home'>
        <Jumbotron>
          <h1 className="display-3">Welcome to Be Brave!</h1>
          <p className="lead">Be Bold. Be you. Be Brave.</p>
          <hr className="my-2" />
          <p>Sign up or Log in to be brave</p>
          <p className="lead">
            <Button clasName="log" onClick={this.modalForm}>Log In</Button>
            <Button className="sign" onClick={this.signModalForm}>Sign Up</Button>
          </p>
        </Jumbotron> 
        </div>
      </div >
    )
  }
};
export default HomePage;