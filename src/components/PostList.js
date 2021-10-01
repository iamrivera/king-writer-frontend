import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

let initialCount = 0
let newCount = 0

// const incrementCount = () => {
//   console.log(newCount = initialCount++)
//   document.querySelector("#root > div > div:nth-child(key) > div:nth-child(key) > div.card-body > button.btn.btn-primary").innerHTML = `Like - ${newCount}`
// }

const PostList = (props) => {
  return (
    <div>
      {props.posts.map((post, idx) => (
        <Card key={idx} className="mb-2">
          <Card.Header>A Post Called</Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button
              className="m-2"
              variant="primary"
              as={Link}
              to={`/posts/${post.id}`}
              id={`Read Button - ${idx}`}
            >
              Read
            </Button>
            <Button
              variant="danger"
              onClick={(event) =>
                window.confirm("Are you sure you want to remove this story?") &&
                props.delete({ post })
              }
              id={`Remove Button - ${idx}`}
            >
              Remove
              </Button>
            <Button
            className="m-2"
              variant="primary"
              id={`Like Button - ${idx}`}
              onClick={() => {
                newCount = initialCount++
                document.getElementById(`Like Button - ${idx}`).innerHTML = `Likes - ${newCount}`
              }}
            >
              {`Likes - ${newCount}`}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default connect(null, null)(PostList);
