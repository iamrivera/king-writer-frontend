import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import getPosts from "../actions/getPosts";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Post from "../components/Post";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/posts/new" component={PostForm} />
        <Route path="/posts/:id" render={(routerProps) => <Post {...routerProps} posts={this.props.posts} />}/>
        <Route
          exact path="/posts"
          render={() => (
            <PostList posts={this.props.posts} />
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
