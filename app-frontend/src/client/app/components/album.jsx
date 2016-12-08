import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CoverPhoto from './cover.jsx';

const Albums = (props) => {
  if (props.albums) {
    return (
      <ul>
        {props.albums.map((album, index) => {
            return (
              <li key={album.id} onClick={(e) => e.stopPropagation() }>{album.name}
                <CoverPhoto images={album.images} />
              </li>
            )
        })}
      </ul>
    )
  }
  else {
    return (
      <div></div>
    )
  }

};


function mapStatetoProps(state) {
  return {
    albums: state.result.artistAlbums
  }
}


export default connect(mapStatetoProps)(Albums);
