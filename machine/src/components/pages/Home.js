import React from 'react';
import Box from '@material-ui/core/Box';

import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Slideshow from '../Slideshow/Slideshow';
import MachineSection from '../MachineSection';
import '../../components/Slideshow/Slideshow.css';
import boxBg from '../../assets/basketball-court-texture.jpg'

function Home() {
  return (
    <>
      <MachineSection />
       <Box bgcolor="rgba(0,0,0,.6)" color='#fff' borderRadius='1%' > 
        <Slideshow
          interval={3000}
          images={[
            '/images/IMG_2247.jpg',
            '/images/IMG_2487.jpg',
            '/images/boys-team.jpg',
            '/images/u14-team.jpg',
            '/images/u14-champs-game.jpg',
            '/images/IMG_2428.jpg',
            '/images/boys-game-take-off.jpg',
            '/images/varsity-free-throw.jpg',
            '/images/varsity-flames-tourney.jpg',
            

         
          ]}
        />
        </Box>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;