import React, {Component} from 'react';
import Cover from './Cover';
import About from './About';
import Experience from './Experience';
import Connect from './Connect';

import './Main.css';

class Main extends Component {

  render() {
    return (
      <div className="fontFamily">
        <Cover></Cover>
        <About></About>
        <Experience></Experience>
        <Connect></Connect>
      </div>
    );
  }
}

export default Main;
