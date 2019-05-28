import React, { Component } from 'react';
//import ProfileBlogCard from '../component/profileBlogCard'
//import ProfileJumbo from '../component/profileJumbo'
import { List, ListItem } from "../component/blogList"
import { Col, Row, Container } from "../component/grid";
import Jumbotron from "../component/jumbotron";
import { Input, TextArea, FormBtn } from "../component/Form";

class Profile extends Component {

    render() {
      return (
       <Container fluid>
         <Row>
         <Col size="md-6">
        <Jumbotron>
          <h1>Breathe In...Breathe Out</h1>
        </Jumbotron>
        <form>
        <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
        </form>
        </Col>
        <Col size="md-6 sm-12">
        <Jumbotron>
              <h1>Growth Tracker</h1>
            </Jumbotron>
        <List>
        <ListItem>

        </ListItem>
        </List>
        </Col>
        </Row>
        </Container>
      )
    }
  };
  export default Profile;