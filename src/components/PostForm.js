import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
    };
  }

  handleOnChange = (event) => {

  }

  handleOnSubmit = (event) => {

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
                placeholder="Write Your Story Here"
                value={this.state.body}
                onChange={this.handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Publish Story</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createPost: (formData) => dispatch(createPost(formData)),
    };
  };

export default PostForm;
