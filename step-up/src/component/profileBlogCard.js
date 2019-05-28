import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import { Redirect } from 'react-router-dom';

import './css/profileBlogCard.css'

class ProfileBlogCard extends React.Component {
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
      return <Redirect to='/blog' />
    }
  }
  render() {
    return (
      <div>
        <Card className="profileCard">
          <CardBody>
            <CardTitle>Congrats on Today</CardTitle>
            <CardText>Lets Celebrate and Plan for tomorrow or the day!</CardText>
            {this.renderRedirect()}
            <Button onClick={this.setRedirect}>New Blog Post</Button>
          </CardBody>
        </Card>
      </div>
    );
  }

}


export default ProfileBlogCard;