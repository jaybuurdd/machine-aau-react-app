import React from 'react';
import Logo from './Logo';
import {NavLogo2} from './SBElements';
import {MACHINEH3B, MACHINEH3C} from './AppElements';

const CoachCardContent = {
  display: 'inline-grid',
  maxWidth: '325px',
  width: '325px',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  margin: '30px',
  zindex: '0',
};

const CoachCard = {
  position: 'relative',
  background: '#fff',
  maxWidth: '325px',
  width: '325px',
  height: 'auto',
  margin: '25px',
  boxShadow: '10px 25px 25px rgb(1 1 1 / 20%)',
  borderRadius: '10px',
  overflow: 'hidden',
  zindex: 0,
};

const CoachDiv = {
  maxHeight: '360px',
  zindex: 0,
};

const CoachImg = {
  width: '280px',
  height: '340px',
  margin: '20px',
  zindex: 0,
};

const CoachInfo = {
  position: 'relative',
  //padding: '0px 20px 0px',
  justifyContent: 'center',
  alignItems: 'center',
};


function CoachCardItem(props) {
  return (
    <>
    <div id='CoachCardContent' style={CoachCardContent}>
      <div id='CoachCard' style={CoachCard}>
        <NavLogo2><Logo /></NavLogo2>
        <div id='CoachImg' style={CoachDiv}><img alt={props.Coach} src={props.ImgLoc} style={CoachImg}/></div>
        <div id='CoachInfo' style={CoachInfo}>
          <MACHINEH3B>{props.Coach}</MACHINEH3B>
          <MACHINEH3C>{props.Team}</MACHINEH3C>
        </div>
      </div>
    </div>
    </>
  );
}

export default CoachCardItem;