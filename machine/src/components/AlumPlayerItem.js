  
import React from 'react';
import { Link } from 'react-router-dom';

function AlumPlayerItem(props) {
  return (
    <>
      <li className='alum__playercards__item'>
        <Link className='alum__playercards__item__link' to={props.path}>
          <figure className='alum__playercards__item__pic-wrap' data-category={props.label}>
            <img
              className='alum__playercards__item__img'
              alt='Player Image'
              src={props.src}
            />
          </figure>
          <div className='alum__playercards__item__info'>
            <h5 className='alum__playercards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default AlumPlayerItem;