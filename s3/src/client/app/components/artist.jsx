import React from 'react';
import { connect } from 'react-redux';
import { clickArtist } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import Albums from './album.jsx';
const Artists = (props) => {
  if (props.items === null || props.items === undefined) {
    return (
      <span>nothing</span>
    );
  }
  else
  {
    return (
      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.id} onClick={() => props.clickArtist(item.id)}>
              <span>{item.name}</span>
              <Albums />
            </li>
            )
        })}
      </ul>
    );
  }
};

function mapStatetoProps(state) {
  return {
    items: state.search.searchresult
  }
}

function matchDispatchToPros(dispatch) {
  return bindActionCreators({clickArtist: clickArtist}, dispatch);
}


export default connect(mapStatetoProps, matchDispatchToPros)(Artists);
