import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import BlogForm from './blogForm'
const MainBlog = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Dive into Happiness</CardTitle>
          <CardText>
          <BlogForm />
          </CardText>
          <Button>Post</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MainBlog;