import React from 'react';
import '../../App.css';
import {MACHINEH1} from '../AppElements';

const pstyle = {
    textalign: 'justify',
    lineheight: 30,
    fontsize: 16,
};


const center = {
    textalign: 'center',
};

const left = {
    textalign: 'left'
};

function Success(){
    return (
    <>
        <div id="success">
        <MACHINEH1 style={center}><strong>MACHINE SUCCESS</strong></MACHINEH1>
        <p style={pstyle}>In a very short time, the program resulted in multiple teams that were ranked Top-10 Nationally and multiple Potomac Valley AAU Championships. The elite teams swept the Fairfax County Division I Championships 4 out of 4 consecutive years and also won a YBOA Division I National Championship. The most amazing aspect of this is that they accomplished this success by developing local, recreational players over time.</p>
        &nbsp;
        <p style={pstyle}>“We feel that the true essence of what we do and what we commit to should be a focus on the individual player. To quote a famous college coach, we should coach for the name on the back of the Jersey and not the name on the front. Each and every player is a superstar in their parent’s eyes and they deserve to be treated as such.”</p>
        &nbsp;
        <p style={pstyle}>The focus on individual skills and character have resulted in 32 Scholar-Athletes playing at the collegiate level to include multiple NCAA Division I players. Dan himself is the recipient of multiple awards and honors to include Coach of the Year and the coveted Defense Volunteer Service Medal. Members of the coaching staff play professionally, hold collegiate scoring records, Hall of Fame Honors, and numerous other accolades.</p>

        <MACHINEH1 style={left}><a href="/placements">Program Championships &amp; Tournament Placements</a></MACHINEH1>
        </div>
    </>
    );
}

export default Success;