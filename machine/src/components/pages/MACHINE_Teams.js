import React from 'react';
import '../../App.css';
import {MACHINEH1, MACHINEInline1, MACHINEInline2, ALink} from '../AppElements';

const IntroImg = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '20.5vw',
    height: 'auto',
  };
  
const TeamImg = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    maxWidth: '15.5vw',
    height: 'auto',
  };

const InfoSpan = {
    display: 'block',
    marginLeft: '2vw',
    marginTop: 'auto',
    marginBottom: 'auto',
    //height: 'auto',
};

const HoldDiv = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '22vw',
}

const center = {
    textAlign: 'center',
};


function MACHINETeams(){
    return (
    <>

    <img src="../../images/logos/MACHINE_Basketball_Blue emblem web.png" style={IntroImg} alt="web emblem"/>
    <MACHINEH1>MACHINE Team Offerings</MACHINEH1>
        <span>MACHINE provides an array of team offerings that match the developmental needs and athletic goals of youth athletes REGARDLESS of skill level, talent, or size.</span>
    <div style={HoldDiv}>
        <React.Fragment>
            <MACHINEInline1><ALink to="/MACHINE-Elite"><img src="../../images/logos/MACHINE_Elite_Blue web.png" style={TeamImg} alt="Team Emblem"/></ALink></MACHINEInline1>
            <MACHINEInline2 style={InfoSpan}>MACHINE Elite&#8480; teams are for high school players with solid to advanced skill level that are committed to high intensity training, practices, and competition. 
                Elite teams are expected to travel nationally for NCAA certified exposure events. NCAA certified exposure tournaments events are the ONLY the way that college coaches 
                can watch and evaluate athletes during the spring, summer, and early fall. Exposure events serve as a truer, more national measuring stick for young athletes looking to 
                play collegiately.  Our Elite teams, also, may be appropriate for "select" 7th and 8th graders who are targeted for enrollment into top DMV private and public school programs.
            </MACHINEInline2>
        </React.Fragment>
    </div>
    <div style={HoldDiv}>
        <React.Fragment>
            <MACHINEInline1><ALink to="/MACHINE-Future"><img src="../../images/logos/MACHINE_Future_Blue web.png" style={TeamImg} alt="Team Emblem"/></ALink></MACHINEInline1>
            <MACHINEInline2 style={InfoSpan}>MACHINE Future&#8480; teams are for middle school players at all skill levels that are committed to consistent training, practices, and competition. 
                Future teams are expected to travel locally and eventually regionally/nationally for basketball IQ development, competitive drive, local exposure, and national exposure preparation. Local (DC, Maryland, &amp; Virginia) DMV basketball evaluators 
                and high school coaches often  watch and evaluate athletes at major local tournaments throughout the year.  Local exposure serves as an opportunity for middle school athletes looking to 
                play at top DMV private school.
            </MACHINEInline2>
        </React.Fragment>
    </div>
    <div style={HoldDiv}>
        <React.Fragment>
            <MACHINEInline1><ALink to="/MACHINE-Lil-Ballers"><img src="../../images/logos/MACHINE_LilBallers_Blue web.png" style={TeamImg} alt="Team Emblem"/></ALink></MACHINEInline1>
            <MACHINEInline2 style={InfoSpan}>MACHINE Lil Baller&#8480; teams are for elementary school players at all skill levels that are committed to being introduced to basketball at a level that is significantly 
                more challenging than recreational level. Athletes will have consistent training and practices.  Competition will be based upon participation and individual development. 
                Lil Baller teams ability to play games are sometimes limited due to the lack of teams in grades 4th and below.  Nevertheless, MACHINE will provide challeging training and practices weekly along with scrimmages.
                Lil Ballers teams travel minimally in the immediate local area for basketball IQ development and competitive drive. 
            </MACHINEInline2>
        </React.Fragment>
    </div>
    <div style={HoldDiv}>
        <React.Fragment>
            <MACHINEInline1><ALink to="/MACHINE-Train"><img src="../../images/logos/MACHINE_Training_Blue web.png" style={TeamImg} alt="Team Emblem"/></ALink></MACHINEInline1>
            <MACHINEInline2 style={InfoSpan}>MACHINE TRAINING&#8480; is a service for athletes at all ages and skill levels. Whether an athlete is wants to develop skill to make an AAU team or is already on an AAU teams and requires
                advanced training to perform at an elite level for college exposure.  MACHINE TRAINING&#8480; can provide on-court workouts, shot-machine sessions, vertimax, and field training. Upon request, MACHINE
                 staff can evaluate an athlete through on-court workouts and game video to establish realistic goals for AAU and collegiate aspirations.  These services are offered for a reasonable fees.
            </MACHINEInline2>
        </React.Fragment>
    </div>

    <MACHINEH1>MACHINE</MACHINEH1>
    <h3 style={center}><em><span><strong>All In - Built to Win</strong></span></em></h3>
    </>
    );
};

export default MACHINETeams;