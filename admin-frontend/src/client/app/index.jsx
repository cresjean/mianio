import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import AdminHome from './components/home/home.jsx';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import allReducers from './reducers/index.jsx';
const store = createStore(allReducers,
  applyMiddleware(
    thunkMiddleware
  )
);

const Admin = () => {
  return (
    <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={AdminHome} />
        </Router>
    </Provider>

  )
}

render(<Admin/>, document.getElementById('admin'));
