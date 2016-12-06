import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { render } from 'react-dom';
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
                </Col>
              </Row>
              <Row className="showGrid">
                <Col xs={12}>
                  <h1>
                    {this.props.article.title}
                  </h1>
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
