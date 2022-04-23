import React from 'react';
//import '../../App.css';
import {MACHINEH1, MACHINEH2_CTR} from '../AppElements';
import AlumCardItem from '../AlumCardItem'
import axios from "axios";
import { useEffect, useState } from 'react';


const center = {
    textalign: 'center',
};

const AlumStyle = {
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
    alignItems: 'center',
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    zindex: 0,
  };


function Alumnae() {
    const [listOfAlums, setlistOfAlums] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/alumnae").then((response) => {
            setlistOfAlums(response.data);
        });
    }, []);

    return (
        <>
            <div id="Alumnae" style={AlumStyle}>
            <MACHINEH1 style={center}><strong>NOTABLE MACHINE Alumnae</strong></MACHINEH1>
            <div id='CardGrid' style={CardGrid}>
                    {listOfAlums.map((value, key) => {
                        return (
                            <AlumCardItem Player={value.Player} ImgLoc={value.ImgLoc} School={value.School}>
                            </AlumCardItem>
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

export default Alumnae;