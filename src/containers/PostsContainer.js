import React, { Component } from 'react';
import { connect } from 'react-redux';
import rootReducer from '../reducers/rootReducer';

class PostsContainer extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return (
            <h1>Hello</h1>
        )
    }

}



    const mapStateToProps = state => {
        return {
            posts: state.posts
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
          getPosts: () => dispatch(getPosts()),
        };
      };
      

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);