import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OnLoad from './components/OnLoad.js';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';


const Application = () => {
  return (
    <div>
    <Nav />
    <Home />
    <About />
    <Experience />
    <Work />
    <Contact />
    </div>
  )
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5500)
  });

  return (
    <div className="App">
      { loading ? <OnLoad /> : <Application /> }
    </div>
  );
}

export default App;
