import React from 'react';
import {render} from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import NavbarComponent from '../navbar/navbar.jsx';
import MainPanel from '../mainpanel/mainpanel.jsx';
require("../common/sass/global.scss");
require("./home.scss");

class Home extends React.Component {
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
        <div className="container-fluid home">
          <NavbarComponent forminput={this.state.input} onChange={this.handleinpuntChange} />
          <div className="container main-panel-container">
            <MainPanel />
          </div>
        </div>
    );
  }
}

export default Home;
