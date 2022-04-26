import React from 'react';
import '../../App.css';
import {MACHINEH1, MACHINEH2, PageList, ALink} from '../AppElements';

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

function AboutUs(){
    return (
    <>
        <MACHINEH1>ABOUT US</MACHINEH1>
        <MACHINEH2 style={center}>What Makes Us Different?</MACHINEH2>
<img class="wp-image-3536 aligncenter" src="http://www.themachine.pro/basketball/wp-content/uploads/2016/07/girlsBasketballDrill3-300x240.jpg" alt="" width="303" height="236" />
<img class="wp-image-3540 aligncenter" src="http://www.themachine.pro/basketball/wp-content/uploads/2016/07/IMG_5766-300x155.jpg" alt="" width="381" height="197" />

<PageList>
 	<li><ALink to="/philosophy">OUR PHILOSOPHY</ALink>{/* <a style = {{color: '0404d4'}} href="/philosophy">OUR PHILOSOPHY</a> */}</li>
 	<li><a href="/success">SUCCESS</a></li>
 	<li><a href="/collegiate-network">COLLEGIATE NETWORK</a></li>
 	<li><a href="/our-coaches">OUR COACHES</a></li>
</PageList>

 <div id="philosophy">
<MACHINEH2 style={center}><strong>OUR PHILOSOPHY</strong></MACHINEH2>
<p style={pstyle}>In 1999 Dan Allen volunteered with Northern Virginia youth sports as a coach and trainer. He and his staff quickly realized that there was very little development for the players in various sports when it came to skills, conditioning, strength and discipline. Coaches were coaching to win at the expense of player development. The sad reality is that the coaches and their teams typically ended with low-skill players, poor performing teams, and more loses than wins. On top of this, players and parents simply walked away from the experience frustrated and disenchanted.</p>
&nbsp;
<p style={pstyle}>In response, Dan and his team set out to change the way players were coached and trained in Northern Virginia. They first forged strategic partnerships with AAU, Lee District Basketball Association, and Springfield Youth Club. The program placed player-development first, but remained synonymous with winning. In addition, character, education, and leadership remain the cornerstone for the club’s foundation for growth and development. They not only engaged professionals throughout the industry, but Dan also utilized his in-depth experience from years of coaching and competition up through AAA; his military experience; and his post graduate work in education. To round out the curriculum they added collegiate and professional level coaches and trainers to the staff.</p>
&nbsp;
<div id="success">
<MACHINEH2 style={center}><strong>SUCCESS</strong></MACHINEH2>
<p style={pstyle}>In a very short time, the program resulted in multiple teams that were ranked Top-10 Nationally and multiple Potomac Valley AAU Championships. The elite teams swept the Fairfax County Division I Championships 4 out of 4 consecutive years and also won a YBOA Division I National Championship. The most amazing aspect of this is that they accomplished this success by developing local, recreational players over time.</p>
&nbsp;
<p style={pstyle}>“We feel that the true essence of what we do and what we commit to should be a focus on the individual player. To quote a famous college coach, we should coach for the name on the back of the Jersey and not the name on the front. Each and every player is a superstar in their parent’s eyes and they deserve to be treated as such.”</p>
&nbsp;
<p style={pstyle}>The focus on individual skills and character have resulted in 32 Scholar-Athletes playing at the collegiate level to include multiple NCAA Division I players. Dan himself is the recipient of multiple awards and honors to include Coach of the Year and the coveted Defense Volunteer Service Medal. Members of the coaching staff play professionally, hold collegiate scoring records, Hall of Fame Honors, and numerous other accolades.</p>

<MACHINEH2 style={left}><a href="/success">Program Championships &amp; Tournament Placements</a></MACHINEH2>

<div id="collegiate">
<MACHINEH2 style={center}><strong>COLLEGIATE NETWORK</strong></MACHINEH2>
<p style={pstyle}>Getting looks at the college level is about hard work, but is also about relationships. Coaches cannot see every player perform so it takes access to the college coaches to get players a fair assessment. The Machine staff has developed hundreds of contacts at the collegiate level and we leverage these to get looks for players across the NCAA spectrum.</p>
&nbsp;
<p style={pstyle}>In truth, playing high school sports is the least beneficial way to get college looks as collegiate coaches are not allowed to attend HS events without permission from the NCAA. There are numerous other tools to gain access to coaches and the Machine staff has had unmatched success in these areas. In fact, many of the great players in the area skipped HS sports and used AAU and personal training to secure an athletic scholarship.</p>
&nbsp;
<p style={pstyle}>Whatever your decision or desire, members of the Machine staff stand ready to assist and advise you along the way.</p>
<MACHINEH2 style={left}><span><strong><a href="/alumnae" target="_blank" rel="noopener noreferrer">Alumnae Players (collegiate)</a></strong></span></MACHINEH2>
&nbsp;
<MACHINEH1>MACHINE</MACHINEH1>
<h3 style={center}><em><span><strong>All In - Built to Win</strong></span></em></h3>
</div>
</div>
</div> 



    </>
    );
};

export default AboutUs;