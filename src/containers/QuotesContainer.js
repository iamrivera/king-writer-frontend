import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import QuoteList from "../components/QuoteList";
import getPosts from "../actions/getPosts";
import getQuotes from "../actions/getQuotes";


class QuotesContainer extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getQuotes();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/quotes" component={QuoteList} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    quotes: state.quotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts()),
    deletePost: (thePost) =>
      dispatch({ type: "DELETE_POST_REQUEST", payload: thePost }),
    getQuotes: () => dispatch(getQuotes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotesContainer);
