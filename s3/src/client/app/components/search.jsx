import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

import { HelpBlock } from 'react-bootstrap';

class FormExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: this.props.value
    };
    this.handleChange = this.handleChange.bind(this);
  };

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  };

  handleChange(e) {

    this.setState({ value: e.target.value });
    this.props.onChange(e.target.value);
    console.log(this.state.value);
  };

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={ this.handleChange }
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
};

export default FormExample;
