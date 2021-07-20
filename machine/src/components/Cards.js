import React from 'react';
import './Cards.css';
import CardItem from './CardItem';



function Cards() {
  return (
    <div className='cards'>
     
      <h1>TRENDING</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/machine-at-usjn.png'
              text='The MACHINE Varsity/Middle School teams will be making an appearance at the upcoming USJN Nationals @ National Harbor, MD July 20th-23rd!'
              label='MACHINE @ USJN'
              path='/usjn'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
