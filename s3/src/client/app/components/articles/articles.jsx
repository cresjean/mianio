import React from 'react';
import {render} from 'react-dom';
import Article from '../article/article.jsx';
class Articles extends React.Component {
  constructor(props) {
    super(props);
    console.debug("Articles Component Cons");
  }
  render() {
    return (
      <div>
        <Article />

      </div>
    );
  }

}

export default Articles;
