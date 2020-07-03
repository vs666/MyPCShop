import React, { Component } from 'react';
import Table from './Table';
import DisplayCart from './Cart'
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Mandatory from './Home.js';
import Layout from './Layout';
import Navigation from './Navigation';
import ControlledCarousel from './Caro';

class App extends Component {

  render() {
    return (
      <React.Fragment className="App">
        <Navigation />

        <div className="ml-0 pl-0">
          <Mandatory/>
          <BrowserRouter>
            <Route exact path="/" >
            <ControlledCarousel />
            </Route>
            <Route path="/find/processors"><Table index={0} style={{marginLeft: '10vh',marginRight: '10vh'}} /></Route>
            <Route path="/find/gpu"><Table index={1} style={{marginLeft: '10vh',marginRight: '10vh'}} /></Route>
            <Route path="/find/processors"><Table index={2} style={{marginLeft: '10vh',marginRight: '10vh'}} /></Route>
            <Route path="/show/mycart"><DisplayCart /></Route>
          </BrowserRouter>

        </div>
      </React.Fragment>
    );
  }
}
export default App;