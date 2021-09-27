import React from "react";
import { Card } from "react-bootstrap";

const Post = (props) => {
  // console.log(props.posts)
  // console.log(props.routerProps.match.params.id)
  let post = props.posts.filter(
    (post) => post.id === Number(props.routerProps.match.params.id)
  )[0];
  // console.log(post)

  return (
    <React.Fragment>
      <Card className="bg-light text-dark">
        <Card.Img
          src="https://picsum.photos/id/486/1250/1250?grayscale"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.ImgOverlay>
      </Card>
      </React.Fragment>
  );
};

export default Post;
