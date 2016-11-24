import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearch } from '../actions/index.js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchinput: ''
    }
  };
  handleChange(e) {
    this.setState({
      searchinput: e.target.value
    });
    this.props.fetchSearch(e.target.value);
  }
  render() {
    return (
      <form>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            value={this.state.searchinput}
            placeholder="Enter text"
            onChange={ (e) => this.handleChange(e) }
          />
          </FormGroup>
      </form>
    );
  }
};
function mapStatetoProps(state) {
  return {
    searchinput: state.search.searchinput
  }
}

function matchDispatchToPros(dispatch) {
  return bindActionCreators({fetchSearch: fetchSearch}, dispatch);
}

export default connect(mapStatetoProps, matchDispatchToPros)(Form);
