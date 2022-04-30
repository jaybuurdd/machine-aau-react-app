import React from 'react';


const LogoImg = {
    maxWidth: '13vw',
    height: 'auto',
    //maxWidth: '82.7vw',
    //zindex: '0',
  };

const Logo = ()  => {
    return (
        <>
            <img style={LogoImg} src="/images/logos/MACHINE_Basketball_Red Bluelogo web2.png"  alt="MACHINE Basketball" />
        </>
    );
};

export default Logo;