import React from "react";
import { Card, Button } from "react-bootstrap";


const Post = (props) => {
  // console.log(props.posts)
  // console.log(props.routerProps.match.params.id)
  let post = props.posts.filter(
    (post) => post.id == props.routerProps.match.params.id
  )[0];
  // console.log(post)

  return (
    <div className="container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://picsum.photos/id/486/1250/1250" />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          {/* <Button variant="primary">Edit</Button>
          <p></p>
          <Button variant="primary" onClick={() => props.delete(post)}>
            Delete
          </Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
