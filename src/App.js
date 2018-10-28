import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Navbar from './components/CustomNavBar';
import Projects from './components/Projects';
import Footer from './components/Footer'



import './App.css';

class App extends Component {

  render() {
    return (
                <div>
                    <Navbar />
                    <LandingPage />
                    <About />
                    <Projects />
                    <Footer />
                </div>
    );
  }
}

export default App;
