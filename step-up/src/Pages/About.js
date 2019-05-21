import React from '../../node_modules/react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from '../../node_modules/reactstrap/lib';
import { Redirect } from 'react-router-dom'

class About extends React.Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/profile' />
    }
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>About Be Brave</CardTitle>
            <CardText>Welcome to Be Brave! We are really grateful to have you with us today and everyday. This is an application where you can 
              be grateful, set daily goals and learn more about yourself. Also if you need ot smash out some stuff on to a page because you had a bad
              day thats ok to. This is a safe space for you to be you, be bold and be brave. So lets get started. 
            </CardText>
            {this.renderRedirect()}
            <Button onClick={this.setRedirect}>profile</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}



export default About;