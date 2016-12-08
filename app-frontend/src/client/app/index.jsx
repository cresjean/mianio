import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import allReducers from './reducers';
import Home from './components/home/home.jsx';
import { bindActionCreators, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(allReducers,
  applyMiddleware(
    thunkMiddleware
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
      </Router>
  </Provider>
  )
}

render(<App/>, document.getElementById('app'));
