import React from 'react';
import { render } from 'react-dom';
import BlinkingCursor from '../blinking-cursor/blinking-cursor.jsx';
require ('./article.scss');
class Article extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    if (this.props.article)  {
      return (
        <div className="article">
         {this.props.article.title}<BlinkingCursor />
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Article;
