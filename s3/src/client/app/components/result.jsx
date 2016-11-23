import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
function BlinkingCursor() {
  return <span className="blinking-cursor">_</span>;
}

class SearchResult extends React.Component {
    render() {
      return (
        <div className="center">
              { this.props.searchinput }
              <BlinkingCursor />
        </div>
      )

    }

}

function mapStatetoProps(state) {
  return {
    searchinput: state.navbar.searchinput
  }
}

export default connect(mapStatetoProps)(SearchResult);
