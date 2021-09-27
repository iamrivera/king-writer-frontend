import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import {createPost} from "../actions/createPost"

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  handleOnChange = (event) => {
    console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.createPost({
        post: {
            title: this.state.title,
            body: this.state.body,
        }
    })

    this.setState({title: "", body: ""})
  }

  render() {
    return (
      <div className="container mt-3">
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalTitle">
            <Form.Label column sm={2}>
              Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="title"
                name="title"
                placeholder="Give Your Post a Fun Title"
                value={this.state.title}
                onChange={this.handleOnChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
            <Form.Label column sm={2}>
              Content
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="textarea"
                name="body"
                placeholder="Write Your Story Here"
                value={this.state.body}
                onChange={this.handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant="success" type="submit">Publish Story</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//     return {
//       posts: state.posts,
//     };
//   };

const mapDispatchToProps = (dispatch) => {
    return {
      createPost: (formData) => dispatch(createPost(formData)),
    };
  };

export default connect(null, mapDispatchToProps)(PostForm);
