import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const PostList = (props) => {
  return (
    <div className="container-fluid mt-4">
      {props.posts.map((post, idx) => (
        <Card key={idx} className="mb-2">
          <Card.Header>A Post Called</Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button className="m-2" variant="primary" as={Link} to={`/posts/${post.id}`}>Read</Button>
            {/* <Button variant="primary">Rewrite</Button> */}
            <Button variant="danger" onClick={event => window.confirm('Are you sure you want to remove this story?') && props.delete({post})}>Remove</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default connect(null,null)(PostList);
