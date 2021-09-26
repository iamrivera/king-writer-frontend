import React from "react";
import { Card, Button } from "react-bootstrap";

const PostList = (props) => {
  return (
    <div className="container">
      {props.posts.map((post, idx) => (
        <Card key={idx}>
          <Card.Header>A Post Called</Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
