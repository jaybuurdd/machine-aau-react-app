import styled from 'styled-components';


const center = {
    textalign: 'center',
};

const left = {
    textalign: 'left'
};


const header1 = ({children }) => (
    <h1>{children}</h1>
  );

  export const MACHINEH1 = styled(header1)`
    color: #0404d4;
    align-items: center;
    text-align: center;
    font-family: 'Plaster', cursive;
    font-size: 2vw;
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
    font-size: 20px;
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
    font-size: 20px;
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
    font-size: 18px;
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
    font-size: 22px;
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
    font-size: 16px;
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
    margin: 200px;
    color: #0404d4;
    align-items: center;
    font-family: 'Sriracha', cursive;
    font-size: 1.2vw;
    text-decoration:
    //zindex: -200;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const CardGrid = styled.div`
    display: inline-grid;
`;

export const pagelist = styled.ul`
    list-style: none;
    position: absolute;
    margin: 0;
    padding: 1rem 1rem;
    display: inline-blockflex;
    width: 100%;
    align-items: left;
    text-align: left;
    margin: 0;
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

