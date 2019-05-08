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
          {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
          <CardBody>
            <CardTitle>About Step-Up</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            {this.renderRedirect()}
            <Button onClick={this.setRedirect}>profile</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}



export default About;