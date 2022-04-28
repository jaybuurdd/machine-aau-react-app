import React from 'react';
import '../../App.css';
import {MACHINEH1, MACHINEH2, PageList, ALink, ALink2} from '../AppElements';

const IntroImg = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '20.5vw',
    height: 'auto',
  };
  
const ValueImg = {
    maxWidth: '25.5vw',
    height: 'auto',
    left: '45%',
  };
  
const pstyle = {
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 16,
};

const center = {
    textAlign: 'center',
};

const left = {
    textalign: 'left'
};



function AboutUs(){
    return (
    <>

    <img src="../../images/logos/MACHINE_Basketball_Blue emblem web.png" style={IntroImg} />
    <MACHINEH1>ABOUT MACHINE</MACHINEH1>
    <MACHINEH2>Contents</MACHINEH2>
            <ul style={{listStyle: "none"}}>
                <li><b><ALink2 to="/AboutUs#MACHINEWhoWeAre">What Is MACHINE</ALink2></b></li>
                <li><b><ALink2 to="/AboutUs#MACHINEOurHistory">MACHINE History</ALink2></b></li>
                <li><b><ALink2 to="/AboutUs#MACHINEMissionStatement">MACHINE Mission Statement</ALink2></b></li>
                <li><b><ALink2 to="/AboutUs#MACHINECoreValues">MACHINE Core Values</ALink2></b></li>
                <li><b><ALink2 to="/AboutUs#MACHINEDifference">What Makes MACHINE Different</ALink2></b></li>
            </ul>

    <MACHINEH2 id="MACHINEWhoWeAre">What Is MACHINE</MACHINEH2>
                <p>MACHINE's is an 100% volunteer Nonprofit organization whose purpose is to foster local, regional, national or
                    international amateur sports competition and conduct local, regional, national or international competition in
                    sports or to support and develop amateur athletes for that competition. Specifically, MACHINE works to 
                    broaden young people's character, skills, and knowledge and inspire interest in learning and leadership using
                    sports as the tool. Our primary focus is AAU/grassroots basketball for boys and girls in the DC, Maryland, &amp; Virginia (DMV) area.</p>

    <MACHINEH2 id="MACHINEOurHistory">MACHINE History</MACHINEH2>
                <p>MACHINE's history informally started in 1999 among a collection of recreational, AAU, and High School coaches in Alexandria, VA who wanted to combat the 
                lack of focus on individual character and skill development. The collection of coaches served and developed relationships with Lee District Basketball Association (LDBA), 
                Springfield/South County Youth Club(SYC), and Cardinal Basketball(Alexandria VA). Led by Dan Allen, the organization achieved great team success (see "Our Success" link below) and player 
                development success (see "Our Alumnae" link below) at the local, regional, and national level.  MACHINE was formally organized in 2015 after the closing of Cardianal Basketball in 2014.
                MACHINE has consistently focused on the development of local athletes REGARDLESS of skill level, talent, or size, RATHER their desire to work hard, DELIBERATELY train and become GREAT!!!</p>
                
    <MACHINEH2 id="MACHINEMissionStatement">MACHINE Mission Statement</MACHINEH2>
                <p>MACHINE's mission is to broaden young people's character, skills, and
                knowledge and inspire interest in learning and leadership using
                sports as the catalyst. MACHINE is dedicated to the support of the organized sports in the Fairfax
                County, Prince William County, Fairfax City, Alexandria City, and other surrounding areas of the DMV.
                MACHINE believes that our mission is to provide organized sports to as many athletes as possible, giving
                young athletes the skills, character development to exceed at the Varsity High School, Collegiate and beyond levels.</p>

    <MACHINEH2 id="MACHINECoreValues">MACHINE Core Values</MACHINEH2>
                <p><img src='../../images/pages/MACHINE Values.png' style={IntroImg}/></p>


    <MACHINEH2 id="MACHINEDifference">What Makes MACHINE Different?</MACHINEH2>
    <ul>
        <li><ALink to="/philosophy">OUR PHILOSOPHY</ALink></li>
        <li><ALink to="/success">SUCCESS</ALink></li>
        <li><ALink to="/collegiate-network">COLLEGIATE NETWORK</ALink></li>
        <li><ALink to="/alumnae">OUR ALUMNAE</ALink></li>
        <li><ALink to="/our-coaches">OUR COACHES</ALink></li>
    </ul>

    <MACHINEH1>MACHINE</MACHINEH1>
    <h3 style={center}><em><span><strong>All In - Built to Win</strong></span></em></h3>
    </>
    );
};

export default AboutUs;