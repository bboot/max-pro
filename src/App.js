import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login'
import TenantInfo from './components/TenantInfo'
import Header from './components/layout/Header'
import About from './components/pages/About'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
          <Route exact path="/" render={ props => (
            <React.Fragment>
              <Header />
              <TenantInfo />
            </React.Fragment>
          )} />
          <Route path="/about" component={ About } />
          <Route path="/login" component={ Login } />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
