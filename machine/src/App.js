import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Alumnae from './components/pages/Alumnae';
import USJN from './components/pages/USJN';
import Sponsors from './components/pages/Sponsors';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import CodeOfConduct from './components/pages/CodeOfConduct';
import Disclaimer from './components/pages/Disclaimer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/usjn' component={USJN} />
          <Route path='/sponsors' component={Sponsors} />
          <Route path='/privacy-policy' component={PrivacyPolicy} />
          <Route path='/terms-of-service' component={TermsOfService} />
          <Route path='/disclaimer' component={Disclaimer} />
        </Switch>
      </Router>
    </>  
  );
}

export default App;
