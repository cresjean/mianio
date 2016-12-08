import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { render } from 'react-dom';

const Author = (props) => {
    return (
      <a href="{props.author.id}">{props.author.name}</a>
    )
}

export default Author;
