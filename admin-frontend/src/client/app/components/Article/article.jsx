import React from 'react';
import {render} from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class ArticleCreate extends React.Component {
  constructor(props) {
    console.log("new article");
    super(props);
  };

  render () {
    return (
        <div className="container-fluid home">
          <div className="container">
              New Article
          </div>
        </div>
    );
  }
}

export default ArticleCreate;
