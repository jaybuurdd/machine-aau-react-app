  
import React from 'react';
import { Link } from 'react-router-dom';

function PlayerItem(props) {
  return (
    <>
      <li className='playercards__item'>
        <Link className='playercards__item__link' to={props.path}>
          <figure className='playercards__item__pic-wrap' data-category={props.label}>
            <img
              className='playercards__item__img'
              alt='Player Image'
              src={props.src}
            />
          </figure>
          <div className='playercards__item__info'>
            <h5 className='playercards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default PlayerItem;