import React from 'react';
import {render} from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import NavbarComponent from '../navbar/navbar.jsx';


class AdminHome extends React.Component {
  constructor(props) {
    super(props);
  };

  handleinpuntChange(value) {
    this.setState({input: value});

  }
  render () {
    return (
        <div className="container-fluid home">
          <NavbarComponent />
          <div className="container">
              Admin
          </div>
        </div>
    );
  }
}

export default AdminHome;
