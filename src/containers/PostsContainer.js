import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import getPosts from "../actions/getPosts";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return <h1>Hello</h1>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
