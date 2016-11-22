import React from 'react';
import {render} from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import NavbarComponent from './components/navbar.jsx';
require("./sass/style.scss");

function BlinkingCursor() {
  return <span className="blinking-cursor">_</span>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input: ''
    };
    this.handleinpuntChange = this.handleinpuntChange.bind(this)
  };

  handleinpuntChange(value) {
    this.setState({input: value});

  }
  render () {
    return (
      <div>
        <NavbarComponent forminput={this.state.input} onChange={this.handleinpuntChange} />
        <div className="center">
            {this.state.input}
            <BlinkingCursor />
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
