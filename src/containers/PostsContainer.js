import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import getPosts from "../actions/getPosts";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/posts/new" component={PostForm} />
        <Route
          path="/posts"
          render={(routerProps) => (
            <PostList {...routerProps} posts={this.props.posts} />
          )}
        />
      </Switch>
    );
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
