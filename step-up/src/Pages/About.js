import React from '../../node_modules/react';
import { Card, CardText, CardBody,
  CardTitle, Button } from '../../node_modules/reactstrap/lib';

const About = () => {
  return (
    <div>
      <Card>
        {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>About Step-Up</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>profile</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;