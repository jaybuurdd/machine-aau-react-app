import React from 'react';
import '../../App.css';
import {MACHINEH1, MACHINEH2} from '../AppElements';

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

function CollegiateNet(){
    return (
    <>
        <div id="collegiate">
        <MACHINEH1 style={center}><strong>MACHINE COLLEGIATE NETWORK</strong></MACHINEH1>
        <p style={pstyle}>Getting looks at the college level is about hard work, but is also about relationships. Coaches cannot see every player perform so it takes access to the college coaches to get players a fair assessment. The Machine staff has developed hundreds of contacts at the collegiate level and we leverage these to get looks for players across the NCAA spectrum.</p>
        &nbsp;
        <p style={pstyle}>In truth, playing high school sports is the least beneficial way to get college looks as collegiate coaches are not allowed to attend HS events without permission from the NCAA. There are numerous other tools to gain access to coaches and the Machine staff has had unmatched success in these areas. In fact, many of the great players in the area skipped HS sports and used AAU and personal training to secure an athletic scholarship.</p>
        &nbsp;
        <p style={pstyle}>Whatever your decision or desire, members of the Machine staff stand ready to assist and advise you along the way.</p>
        <MACHINEH2 style={left}><span><strong><a href="/alumnae" target="_blank" rel="noopener noreferrer">Alumnae Players (collegiate)</a></strong></span></MACHINEH2>
        &nbsp;
        </div>
    </>
    );
}

export default CollegiateNet;