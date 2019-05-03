import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const ProfileJumbo  = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome Back!</h1>
          <p className="lead">Breathe in....Breathe out...</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ProfileJumbo;
