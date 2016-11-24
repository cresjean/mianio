import React from 'react';
import {render} from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import NavbarComponent from './components/navbar.jsx';
import { createStore } from 'redux';
import allReducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import SearchResult from './components/result.jsx';
import { bindActionCreators, applyMiddleware } from 'redux';

require("./sass/style.scss");

const store = createStore(allReducers,
  applyMiddleware(
    thunkMiddleware
  )
);

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
        <div className="container-fluid">
          <NavbarComponent forminput={this.state.input} onChange={this.handleinpuntChange} />
          <SearchResult />
        </div>
    </Provider>
    );
  }
}

render(<App/>, document.getElementById('app'));
