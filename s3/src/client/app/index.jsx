import React from 'react';
import {render} from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import NavbarComponent from './components/navbar.jsx';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import SearchResult from './components/result.jsx';

require("./sass/style.scss");

const store = createStore(allReducers);

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
      <Provider store={store}>
        <div>
          <NavbarComponent forminput={this.state.input} onChange={this.handleinpuntChange} />
          <SearchResult />
        </div>
    </Provider>
    );
  }
}

render(<App/>, document.getElementById('app'));
