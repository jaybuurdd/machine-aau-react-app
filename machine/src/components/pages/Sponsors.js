import React from 'react';
import Img1 from '../../images/sponsors/SRI.png';
import Img2 from '../../images/sponsors/LE Meridian.jpg';
import Img3 from '../../images/sponsors/Mount Vernon Sunoco.png';
import Img4 from "../../images/sponsors/Today\'s Mortgage.png";
import Img5 from '../../images/sponsors/Glory Days Grill.png';
import { SponsorGallery, GalleryPics } from './SponsorGallery';

const Sponsors = ()  => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      imgRef: "https://www.sri-hq.com"
    },
    {
      id: 2,
      imgSrc: Img2,
      imgRef: 'https://www2.l-e.com/'
    },    
    {
      id: 3,
      imgSrc: Img3,
      imgRef: 'https://www.sunoco.com/locations/store/8300-richmond-hwy-alexandria-va-0071210901'
    },
    {
      id: 4,
      imgSrc: Img4,
      imgRef: 'http://www.todaysmortgage.net'
    },
    {
      id: 5,
      imgSrc: Img5,
      imgRef: 'https://www.glorydaysgrill.com/locations/virginia/lorton/?locid=15'
    }
  ]
  return (
    <>
      <SponsorGallery>
        {data.map((item, index)=>{
          return(
            <GalleryPics key={index}>
              <a href={item.imgRef} target="_blank"><img src={item.imgSrc}  alt={item.id}/></a>
            </GalleryPics>
          )
        })}
      </SponsorGallery>

    </>
  )
}

export default Sponsors;
