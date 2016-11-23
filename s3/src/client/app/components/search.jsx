import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enterSearch } from '../actions/index.js';

class Form extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"

        >
          <FormControl
            type="text"
            value={this.props.searchinput}
            placeholder="Enter text"
            onChange={ (e) => this.props.enterSearch(e) }
          />
          </FormGroup>
      </form>
    );
  }
};
function mapStatetoProps(state) {
  return {
    searchinput: state.navbar.searchinput
  }
}

function matchDispatchToPros(dispatch) {
  return bindActionCreators({enterSearch: enterSearch}, dispatch);
}

export default connect(mapStatetoProps, matchDispatchToPros)(Form);
