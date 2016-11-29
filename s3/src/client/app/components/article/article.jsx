import React from 'react';
import { render } from 'react-dom';
import BlinkingCursor from '../blinking-cursor/blinking-cursor.jsx';
require ('./article.scss');
class Article extends React.Component {
  constructor(props) {
    super(props);
    console.debug("Article");
  }

  render() {
    return (
      <div className="article">
        This is an article <BlinkingCursor />
      </div>
    )
  }
}

export default Article;
