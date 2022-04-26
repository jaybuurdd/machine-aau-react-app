import React from 'react';
//import '../../App.css';
import {MACHINEH1, MACHINEH2_CTR} from '../AppElements';
import CoachCardItem from '../CoachCardItem'
import axios from "axios";
import { useEffect, useState } from 'react';


const center = {
    textalign: 'center',
};

const CoachStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    zindex: 0,
  };


const CardGrid = {
    //minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '10px',
    alignItems: 'stretch',
    width: '100%',
    justifyContent: 'center',
    //alignItems: 'center',
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    zindex: 0,
  };


function Coaches() {
    const [listOfCoaches, setlistOfCoaches] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/Coaches").then((response) => {
            setlistOfCoaches(response.data);
        });
    }, []);

    return (
        <>
            <div id="Coaches" style={CoachStyle}>
            <MACHINEH1 style={center}><strong>MACHINE Coaches</strong></MACHINEH1>
            <div id='CardGrid' style={CardGrid}>
                    {listOfCoaches.map((value, key) => {
                        return (
                            <CoachCardItem Player={value.Player} ImgLoc={value.ImgLoc} School={value.School}>
                            </CoachCardItem>
                        )
                    }
                    )}
            </div>
                        <MACHINEH1>MACHINE</MACHINEH1>
                        <MACHINEH2_CTR>All In - Built to Win</MACHINEH2_CTR>
            </div>
        </>

    );
}

export default Coaches;