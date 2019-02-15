import React, { Component } from 'react';
import './resources/styles.css';
import Header from './Components/Header_footer/Header';
import Featured from './Components/Featured';
import VenueNFO from './Components/VenueNFO';
import Highlights from './Components/Highlights'; 
import Tickets from './Components/Prices/tickets';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px"}}>
        <Header/>
        <Featured/>
        <VenueNFO/>
        <Highlights/>
        <Tickets/>
      </div>
    );
  }
}

export default App;
