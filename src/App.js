import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Error from './components/Error';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
    <main>
    <Navbar />
    <Switch>
    
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={Error} />
    </Switch>
</main>
    </div>
  );
}

export default App;
