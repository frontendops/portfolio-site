import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Navbar from './components/CustomNavBar';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={LandingPage} />
                </div>
            </Router>
    );
  }
}

export default App;
