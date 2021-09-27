import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const PostList = (props) => {
  return (
    <div className="container">
      {props.posts.map((post, idx) => (
        <Card key={idx}>
          <Card.Header>A Post Called</Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button variant="primary" as={Link} to={`/posts/${post.id}`}>View Post</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default connect(null,null)(PostList);
