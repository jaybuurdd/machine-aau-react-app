import React from 'react';
import '../../App.css';
import {MACHINEH1} from '../AppElements';

const pstyle = {
    textalign: 'justify',
    lineheight: 30,
    fontsize: 16,
};

function Philosophy(){
    return (
    <>
        <div id="philosophy">
                 <MACHINEH1>MACHINE PHILOSOPHY</MACHINEH1>
                    <p style={pstyle}>In 1999 Dan Allen volunteered with Northern Virginia youth sports as a coach and trainer. He and his staff quickly realized that there was very little development 
                    for the players in various sports when it came to skills, conditioning, strength and discipline. Coaches were coaching to win at the expense of player development. The sad reality is 
                    that the coaches and their teams typically ended with low-skill players, poor performing teams, and more loses than wins. On top of this, players and parents simply walked away from 
                    the experience frustrated and disenchanted.</p>
                    &nbsp;
                    <p style={pstyle}>In response, Dan and his team set out to change the way players were coached and trained in Northern Virginia. They first forged strategic partnerships with AAU, 
                    Lee District Basketball Association, and Springfield Youth Club. The program placed player-development first, but remained synonymous with winning. In addition, character, education, 
                    and leadership remain the cornerstone for the club's foundation for growth and development. They not only engaged professionals throughout the industry, but Dan also utilized his 
                    in-depth experience from years of coaching and competition up through AAU, other grassroots organizations, and Nike/UA sponsored tournaments/events; his military experience; and his 
                    post graduate work in education. To round out the curriculum they added collegiate and professional level coaches and trainers to the staff.</p>
                    &nbsp;
        </div>
    </>
    );
}

export default Philosophy;