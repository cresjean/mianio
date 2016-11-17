import React from 'react';
import {render} from 'react-dom';
require("./css/style.css");
class App extends React.Component {
  render () {
    return (
      <div className="center">面流科技<span className="blinking-cursor">_</span></div>
    );
  }
}

render(<App/>, document.getElementById('app'));
