import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { render } from 'react-dom';
import moment from 'moment';
import Author from '../author/author.jsx';
require ('./article.scss');
class Article extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    if (this.props.article)  {
      return (
        <div className="article">
            <Grid>
              <Row className="showGrid">
                <Col xs={12}>
                  <i className="fa fa-tags" aria-hidden="true"></i>
                  {
                    this.props.article.tags.map((object, index) => {
                      if (index == this.props.article.tags.length - 1) {
                        return <span key={index}>{object.name}</span>
                      } else {
                        return (
                          <span key={index}> {object.name} | </span>
                        )
                      }
                    })
                  }
                </Col>
              </Row>
              <Row className="showGrid">
                <Col xs={12}>
                  <h1>
                    {this.props.article.title}
                  </h1>
                </Col>
              </Row>
              <Row className="showGrid">
                <Col xs={12}>
                    <Author author={this.props.article.author}/>
                    {moment(this.props.article.created * 1000).fromNow()}
                </Col>
              </Row>
              <Row className="showGrid">
                <Col xs={12}>
                    {this.props.article.abstract}
                  </Col>
              </Row>
            </Grid>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Article;
