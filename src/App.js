import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer'



import './App.css';

class App extends Component {

  render() {
    return (
                <div>
                    <LandingPage />
                    <About />
                    <Projects />
                    <Footer />
                </div>
    );
  }
}

export default App;
