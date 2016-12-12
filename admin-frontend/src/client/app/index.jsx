import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import AdminHome from './components/home/home.jsx';
import ArticleCreate from './components/article/article.jsx';
import Stats from './components/stats/stats.jsx';
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

          <Route path="/" component={AdminHome} >
            <IndexRoute component={Stats}/>
            <Route path="new" component={ArticleCreate} />
          </Route>
        </Router>
    </Provider>

  )
}

render(<Admin/>, document.getElementById('admin'));
