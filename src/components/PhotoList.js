import React from "react";
import { connect } from "react-redux";

const PhotoList = (props) => {
  return (
    <div className="container-fluid mt-4">
      {props.photos.map((photo, idx) => (
        <Image src={`${photo.link}`} fluid />
      ))}
    </div>
  );
};

export default connect(null,null)(PhotoList);
