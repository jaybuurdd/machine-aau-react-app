import React from 'react';
import './PlayerCards.css';
import CardItem from './PlayerItem';

function PlayerCards() {
  return (
    <div className='playercards'>
      <h1>OUR ALUMNAE</h1>
      <div className='playercards__container'>
        <div className='playercards__wrapper'>
          <ul className='playercards__items'>
            <CardItem
              src='https://themachine.pro/basketball/wp-content/uploads/2019/03/PriscillaMoseh.jpg'
              text='Shepard'
              label='Priscilla Moseh'
        
            />
            <CardItem
              src='https://themachine.pro/basketball/wp-content/uploads/2019/03/RuthSherrill.jpg'
              text='Hofstra/Temple'
              label='Ruth Sherrill'
              
            />
               <CardItem
              src='https://themachine.pro/basketball/wp-content/uploads/2019/03/KellyLoftus.jpg'
              text='Hofstra/ODU'
              label='Kelly Loftus'
              
            />
          </ul>
          <ul className='playercards__items'>
            <CardItem
              src='https://themachine.pro/basketball/wp-content/uploads/2019/03/TaylorDunham.jpg'
              text='Naval Academy'
              label='Taylor Dunham'
              
            />
            <CardItem
              src='https://themachine.pro/basketball/wp-content/uploads/2019/03/SheilaSherrill.jpg'
              text='Northern Virginia CC'
              label='Sheila Sherrill'
              
            />
            <CardItem
              src='https://themachine.pro/basketball/wp-content/uploads/2019/03/ChaniaRay.jpg'
              text='Florida State/West Virginia'
              label='Chania Ray'
             
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlayerCards;