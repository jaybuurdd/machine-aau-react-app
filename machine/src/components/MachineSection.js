import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MachineSection.css';

function MachineSection() {
  return (
  <div className='machine-container'>
      <video src='/videos/MACHINE-Combustion-Logo.mp4' autoPlay  MachineSection />
      <h1>WELCOME TO THE MACHINE</h1>
      <p>A Virginia based non-profit basketball league 
          with the goal of broadening the skills, character, 
          and knowledge of our youths.</p>
  </div>
  );
}

export default MachineSection;