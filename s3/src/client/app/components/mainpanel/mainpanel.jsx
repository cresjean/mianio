import React from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Articles from '../articles/articles.jsx';
import Sidebar from '../sidebar/sidebar.jsx';
const MainPanel = () => {
  return (
      <Grid>
        <Row className="show-grid">
           <Col xs={12}>
             <Articles />
            </Col>
           <Col xs={12}>
             <Sidebar />
           </Col>
         </Row>
      </Grid>
  )
}

export default MainPanel;
