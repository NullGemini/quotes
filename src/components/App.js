import React, { Component } from 'react';

import '../css/App.css';
import Header from './header'
import Body from './body'
import Footer from './footer';
import data from '../data/quotes.json';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Body data={data} />
        <Footer data={data} />
      </div>
    );
  }
}

export default App;
