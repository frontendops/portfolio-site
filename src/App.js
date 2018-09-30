import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';

import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
    
  render() {
    return (
        <fragment>
            <Route exact path="/" render={() =>(
                  <LandingPage
                  />
              )} />

          <Route exact path="/about" render={() =>(
                    <About/>
                )} />

        </fragment>

    );
  }
}

export default App;
