import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Navbar from './components/CustomNavBar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'



import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Footer />
                </div>
            </Router>
    );
  }
}

export default App;
