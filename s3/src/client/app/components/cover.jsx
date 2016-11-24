import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const CoverPhoto = (props) => {
  if (props.images) {
    let [{url}, ...last] = props.images;
    return (
      <img src={url} />
    )
  }
  else {
    return (
      <div></div>
    )
  }

};


export default CoverPhoto;
