import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OnLoad from './components/OnLoad.js';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';


const App = () => {
  return (
    <div className="App">
      <OnLoad />
      <Nav />
      <Home />
      <About />
      <Work />
      <Experience />
      <Contact />
    </div>

  );
}

export default App;
