import React, { Component } from 'react';
import './resources/styles.css';

import Header from './Components/Header_footer/Header';
import { Toolbar } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Toolbar/>
      </div>
    );
  }
}

export default App;
