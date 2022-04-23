import React from 'react';
import { Link } from 'react-router-dom';
import {MACHINEH3B, MACHINEH3C} from './AppElements';

const AlumCardContent = {
  display: 'inline-grid',
  maxWidth: '325px',
  width: '325px',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  margin: '30px',
  zindex: '0',
};

const AlumCard = {
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

const AlumDiv = {
  maxHeight: '360px',
  zindex: 0,
};

const AlumImg = {
  width: '280px',
  height: '340px',
  margin: '20px',
  zindex: 0,
};

const AlumInfo = {
  position: 'relative',
  //padding: '0px 20px 0px',
  justifyContent: 'center',
  alignItems: 'center',
};


function AlumCardItem(props) {
  return (
    <>
    <div id='AlumCardContent' style={AlumCardContent}>
      <div id='AlumCard' style={AlumCard}>
        <div id='AlumImg' style={AlumDiv}><img alt={props.Player} src={props.ImgLoc} style={AlumImg}/></div>
        <div id='AlumInfo' style={AlumInfo}>
          <MACHINEH3B>{props.Player}</MACHINEH3B>
          <MACHINEH3C>{props.School}</MACHINEH3C>
        </div>
      </div>
    </div>
    </>
  );
}

export default AlumCardItem;