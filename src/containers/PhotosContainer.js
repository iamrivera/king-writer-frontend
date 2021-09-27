import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import getPhotos from "../actions/getPhotos";
import PhotoList from "../components/PostList";


class PhotosContainer extends Component {
    componentDidMount() {
        this.props.getPhotos();
      }

    render() {
        return (
            <Switch>
                <Route exact path="/photos" render={() => (<PhotoList photos={this.state.photos, console.log(this.props)} />)}/>
            </Switch>
        )
    }

}

const mapStateToProps = (state) => {
    return {
      photos: state.photos,
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      getPhotos: () => dispatch(getPhotos()),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer);