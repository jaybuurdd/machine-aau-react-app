import React from 'react';
import SMLogo from './SMLogo';
import {NavLogo3} from './SBElements';
import {MACHINEH4B, MACHINEH4C} from './AppElements';

const CoachCardContent = {
  display: 'inline-grid',
  maxWidth: '21vw',
  width: '21vw',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  margin: '1.5vw',
  zindex: '0',
};

const CoachCard = {
  position: 'relative',
  background: '#c3d8e0',
  //background: '#fff',
  maxWidth: '20vw',
  width: '20vw',
  height: 'auto',
  margin: '1vw',
  boxShadow: '2vw 3vw 3vw rgb(1 1 1 / 20%)',
  borderRadius: '3vw',
  overflow: 'hidden',
  zindex: 0,
};

const TeamDiv = {
  display: 'block',
  width: '100%',
  marginLeft: '0%',
  alignItems: 'center',
  //maxWidth: '15.5vw',
  //height: 'auto',
};

const TeamImg = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '40%',
  //maxWidth: '15.5vw',
  //height: 'auto',
};

const CoachDiv = {
  maxHeight: '19.5vw',
  zindex: 0,
};

const CoachImg = {
  width: '16vw',
  height: '20vw',
  //marginLeft: 'auto',
  //marginRight: 'auto',
  margin: '1.9vw',
  zindex: 0,
};

const CoachInfo = {
  position: 'relative',
  //padding: '0px 20px 0px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '8vw',
};


function CoachCardItem(props) {
  return (
    <>
    <div id='CoachCardContent' style={CoachCardContent}>
      <div id='CoachCard' style={CoachCard}>
        <NavLogo3 id='TeamLogo' style={TeamDiv}><SMLogo style={TeamImg} /></NavLogo3>
        <div id='CoachImg' /* style={CoachDiv} */><img alt={props.Coach} src={props.ImgLoc} style={CoachImg}/></div>
        <div id='CoachInfo' style={CoachInfo}>
          <MACHINEH4B>{props.Coach}</MACHINEH4B>
          <MACHINEH4C>{props.Team}</MACHINEH4C>
          <MACHINEH4C>{props.Team2}</MACHINEH4C>
        </div>
      </div>
    </div>
    </>
  );
}

export default CoachCardItem;