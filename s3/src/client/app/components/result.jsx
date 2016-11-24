import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Artists  from './artist.jsx';

const BlinkingCursor = () => {
  return (
    <span className="blinking-cursor">_</span>
  )
};

class SearchResult extends React.Component {
    render() {
      return (
        <div className="row">
          <div className="col-xs-12">
            { this.props.searchinput }
            <BlinkingCursor />
            <hr />
            <Artists />
          </div>
        </div>
      )
    }
}


function mapStatetoProps(state) {
  return {
    searchinput: state.search.searchinput
  }
}

export default connect(mapStatetoProps)(SearchResult);
