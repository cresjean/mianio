import React from 'react';
import {render} from 'react-dom';
import Article from '../article/article.jsx';
import { connect } from 'react-redux';
import { loadArticles } from '../../actions/index.js';
import { bindActionCreators } from 'redux';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    console.debug("Articles Component Cons");
  }

  componentWillMount() {
    console.debug("Articles components will mount");
    const { loadArticles } = this.props;
    loadArticles();
  }

  render() {
    if (this.props.articles) {
      return (
        <div>
            {
                this.props.articles.map(function(object) {
                  console.log("One object");
                  return <Article key={object.id} article={object} />
                })
            }
              <Article />
        </div>
      );
    } else {
      return null;
    }
  }
}


function mapStatetoProps(state) {
  return {
    articles: state.articles.articles
  }
}


function matchDispatchToPros(dispatch) {
  return bindActionCreators({loadArticles: loadArticles}, dispatch);
}

export default connect(mapStatetoProps, matchDispatchToPros)(Articles);
