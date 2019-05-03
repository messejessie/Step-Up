import React from '../../node_modules/react';
import { Card, CardText, CardBody,
  CardTitle, Button } from '../../node_modules/reactstrap/lib';

const ProfileBlog = () => {
  return (
    <div>
      <Card>
        {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>Congrats on Today</CardTitle>
          <CardText>Lets Celebrate and Plan for tomorrow or the day!</CardText>
          <Button>New Blog Post</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileBlog;