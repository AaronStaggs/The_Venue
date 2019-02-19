import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';
import Header from './Components/Header_footer/Header';
import Featured from './Components/Featured';
import VenueNFO from './Components/VenueNFO';
import Highlights from './Components/Highlights'; 
import Tickets from './Components/Prices/tickets';
import Location from './Components/Location/index';
import Footer from './Components/Header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px"}}>
        <Header/>

        <Element name='Featured'>
        <Featured/>
        </Element>

        <Element name='Info'>
        <VenueNFO/>
        </Element>

        <Element name='Highlights'>
        <Highlights/>
        </Element>

        <Element name='Pricing'>
        <Tickets/>
        </Element>

        <Element name='Location'>
        <Location/>
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;
