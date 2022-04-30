import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const header1 = ({children }) => (
    <h1>{children}</h1>
  );

  export const MACHINEH1 = styled(header1)`
    color: #0404d4;
    align-items: center;
    text-align: center;
    font-family: 'Plaster', cursive;
    font-size: 3.5vw;
    padding: 0;
    text-decoration: none;
    zindex: 4200;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


const header2 = ({children }) => (
    <h2>{children}</h2>
  );

export const MACHINEH2 = styled(header2)`
    color: #0404d4;
    align-items: left;
    text-align: left;
    font-family: 'Plaster', cursive;
    font-size: 1.85vw;
    text-decoration: none;
    zindex: 4200;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MACHINEH2_CTR = styled(header2)`
    color: #0404d4;
    align-items: center;
    text-align: center;
    font-family: 'Plaster', cursive;
    font-size: 1.85vw;
    text-decoration: none;
    zindex: 4200;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const header3 = ({children }) => (
    <h3>{children}</h3>
  );

export const MACHINEH3 = styled(header3)`
    color: #0404d4;
    align-items: left;
    text-align: left;
    font-family: 'Plaster', cursive;
    font-size: 1.75vw;
    text-decoration: underline;
    zindex: 1000;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MACHINEH3B = styled.span`
    display: block;
    color: #0404d4;
    align-items: center;
    text-align: center;
    font-family: 'Sriracha', cursive;
    font-size: 2.1vw;
    font-weight: bold;
    zindex: 1000;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MACHINEH3C = styled.span`
    display: block;
    color: #0404d4;
    align-items: center;
    text-align: center;
    font-family: 'Sriracha', cursive;
    font-size: 1.6vw;
    font-weight: bold;
    zindex: 1000;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const MACHINEMain = styled.div`
    position: relative;
    display: block;
    //top: 190px;
    width: 90%;
    top: 5vw;
    margin: 6.5vw;
    color: #0404d4;
    //align-items: center;
    font-family: 'Sriracha', cursive;
    font-size: 1.2vw;
    text-decoration: none;
    z-index: -5;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MACHINEInline1 = styled.div`
    position: relative;
    display: inline-block;
    width: 30%;
    margin: 6.5vw;
    //align-items: center;
    z-index: -5;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MACHINEInline2 = styled.div`
    position: relative;
    display: inline-block;
    width: 70%;
    margin: 6.5vw;
    align-text: left;
    z-index: -5;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const ALink = styled.a`
    color: #0404d4;
    font-family: 'Sriracha', cursive;
    font-size: 1.1vw;
    font-weight: bold;
    text-decoration: underline;
`;

export const ALink2 = styled(HashLink)`
    color: #0404d4;
    font-family: 'Sriracha', cursive;
    font-size: 1.1vw;
    font-weight: bold;
    text-decoration: underline;
`;

export const CardGrid = styled.div`
    display: inline-grid;
`;

export const PageList = styled.ul`
    list-style: none;
    position: absolute;
    margin: 0;
    width: 100%;
    text-align: left;
    padding: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const placetable = ({children }) => (
    <div style="overflow-x: auto;">
    <table>
        {children}
    </table>
    </div>    
);
  
const placetable_HDrow = ({children }) => (
    <tr>{children}</tr>
  );

const placetable_row = ({children }) => (
    <tr>{children}</tr>
);

const placetbl_Hdr = ({children }) => (
        <th>{children}</th>    
);

const placetbl_data = ({children }) => (
        <td>{children}</td>    
);

export const ChampTable = styled(placetable)`
    table-layout: fixed;
    border: 1px solid black;
    width: 75%;
`;

export const ChampHDR = styled(placetbl_Hdr)`
    border: 1px solid #999;
    padding: 0.5rem;
    text-align: center;
`;

export const ChampData = styled(placetbl_data)`
    border: 1px solid #999;
    padding: 0.5rem;
    text-align: left;
`;

