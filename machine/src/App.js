import React from 'react';
import SocialBar from './components/SocialBar';
import NavBar3 from './components/NavBar3';
import {MACHINEMain} from './components/AppElements';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Philosophy from './components/pages/philosophy';
//import Alumnae from './components/pages/Alumnae';
import Alumnae from './components/pages/alumnae2';
import Coaches from './components/pages/coaches';
import Success from './components/pages/success';
import Placements from './components/pages/placements';
import CollegiateNet from './components/pages/collegiate_network';
import Events from './components/pages/events';
import News from './components/pages/news';
import USJN from './components/pages/USJN';
import Sponsors from './components/pages/Sponsors';
import MACHINETeams from './components/pages/MACHINE_Teams';
import MACHINEElite from './components/pages/MACHINE_Elite';
import MACHINEFuture from './components/pages/MACHINE_Future';
import MACHINELilBallers from './components/pages/MACHINE_LiL_Ballers';
import MACHINETrain from './components/pages/MACHINE_Train';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import CodeOfConduct from './components/pages/CodeOfConduct';
import Disclaimer from './components/pages/Disclaimer';

function App() {
  return (
    <>
      <Router>
        <SocialBar id="Social Bar"/>
        <NavBar3 />
        <MACHINEMain id="MACHINEMain">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/philosophy' component={Philosophy} />
            <Route path='/alumnae' component={Alumnae} />
            <Route path='/coaches' component={Coaches}/>
            <Route path='/success' component={Success} />
            <Route path='/placements' component={Placements} />
            <Route path='/collegiate-network' component={CollegiateNet} />
            //<Route path='/events' component={Events} />
            <Route path='/news' component={News} />
            <Route path='/usjn' component={USJN} />
            <Route path='/MACHINE-Teams' component={MACHINETeams} />
            <Route path='/MACHINE-Elite' component={MACHINEElite} />   
            <Route path='/MACHINE-Future' component={MACHINEFuture} />   
            <Route path='/MACHINE-Lil-Ballers' component={MACHINELilBallers} />     
            <Route path='/MACHINE-Train' component={MACHINETrain} />      
            <Route path='/sponsors' component={Sponsors} />
            <Route path='/privacy-policy' component={PrivacyPolicy} />
            <Route path='/terms-of-service' component={TermsOfService} />
            <Route path='/code-conduct' component={CodeOfConduct} />
            <Route path='/disclaimer' component={Disclaimer} />
          </Switch>
        </MACHINEMain>

        <Footer />
      </Router>
    </>  
  );
}

export default App;
