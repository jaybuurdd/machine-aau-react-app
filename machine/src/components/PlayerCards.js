import React from 'react';
import './PlayerCards.css';
import CardItem from './PlayerItem';



function PlayerCards() {
  return (
    <div className='cards'>
     
      <h1>Girl's Varisity Team</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images\players\varsity\aari.jpg'
              text='STATS COMING SOON!'
              label='Aari Davis'
            />
             <CardItem
              src='images\players\varsity\avarie.jpg'
              text='STATS COMING SOON!'
              label='Avarie Arrington'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images\players\varsity\ayanna.jpg'
              text='STATS COMING SOON!'
              label='Ayanna Ancrum'
            />
             <CardItem
              src='images\players\varsity\belle.jpg'
              text='STATS COMING SOON!'
              label='Belle Akeredolu'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images\players\varsity\cydnee.jpg'
              text='STATS COMING SOON!'
              label='Cydnee Duckett'
            />
             <CardItem
              src='images\players\varsity\dani.jpg'
              text='STATS COMING SOON!'
              label='Danielle Allen'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images\players\varsity\kk.jpg'
              text='STATS COMING SOON!'
              label='Kaelyn Allen'
            />
             <CardItem
              src='images\players\varsity\kristina.jpg'
              text='STATS COMING SOON!'
              label='Kristina Ta'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images\players\varsity\soon.jpg'
              text='STATS COMING SOON!'
              label='Princess Mensah'
            />
             <CardItem
              src='images\players\varsity\soon.jpg'
              text='STATS COMING SOON!'
              label='Litzy Gonzales'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images\players\varsity\soon.jpg'
              text='STATS COMING SOON!'
              label='Isabela Gonzales'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlayerCards;
