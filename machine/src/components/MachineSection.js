import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MachineSection.css';

function MachineSection() {
  return (
    <div className='machine-container'>
      <video src='/videos/MACHINE-Combustion-Logo.mp4' autoPlay loop muted />
      <h1>WELCOME TO THE MACHINE</h1>
      <p>A Virginia based non-profit basketball league 
          with the goal of broadening the skills, character, 
          and knowledge of our youths.</p>
      <div className='machine-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default MachineSection;