import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.div`
    position: fixed;
    top: 0px;
    width: 100%;
    background: white;
    height: 64px;
    display: block;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    zindex: 1100;
`;

export const Nav2 = styled.div`
    position: fixed;
    top: 64px;
    width: 100%;
    background: lightgrey;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 3.25);
    zindex: 1000;
`;

export const Foot = styled.div`
    //position: relative;
    //top: 60px;
    //width: 100%;
    background: #0404d4;
    height: 100px;
    display: block;
    //justify-content: space-between;
    padding: 0.75rem calc((100vw - 1000px) / 5.25);
    zindex: 1000;
`;



export const NavLink = styled(Link)`
    color: #0404d4;
    display: flex;
    align-items: center;
    font-family: 'Sriracha', cursive;
    font-size: 18px;
    text-decoration: none;
    padding: 0.25rem 1.25rem;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
    zindex: 2200;

    &.active {
        color: #15cdfc;
    }

    &:hover {
        background: #5cabff;
    }
`;

export const NavLink2 = styled(Link)`
    color: #0404d4;
    // color: #fff;
    display: flex;
    align-items: center;
    font-family: 'Plaster', cursive;
    font-size: 24px;
    text-decoration: none;
    padding: 0rem 0.75rem;
    height: 100%;
    cursor: pointer;
    zindex: 5200;

    &.active {
        color: #15cdfc;
    }

    &:hover {
        background: #5cabff;
    }
`;

export const NavLink3 = styled(Link)`
    color: white;
    // color: #fff;
    display: flex;
    align-items: center;
    font-family: 'Plaster', cursive;
    font-size: 20px;
    text-decoration: none;
    padding: 0.25rem 2rem;
    height: 100%;
    width: 100%;
    cursor: pointer;
    zindex: 5200;

    &.active {
        color: #15cdfc;
    }

    &:hover {
        background: #5cabff;
    }
`;

export const NavMenu= styled.ul`
    list-style: none;
    position: absolute;
    top: 0%;
    left: 10%;
    display: flex;
    align-items: center;
    /* margin-right: -24px; */
    zindex: 4200;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const NavMenu2= styled.ul`
    list-style: none;
    position: absolute;
    margin: 0;
    padding: 0;
    top: 0%;
    left: 5%;
    align-items: center;
    text-align: center;
    width: 70%;
    margin-right: 0rem;
    zindex: 4200;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavMenu3= styled.ul`
    list-style: none;
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    left: 5%;
    align-items: center;
    text-align: center;
    width: 70%;
    margin-right: 0rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
export const NavItem= styled.li`
    position: relative;
    display: inline-block;
    align-items: center;
    height: 40px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem2= styled.li`
    position: relative;
    display: inline-block;
    align-items: center;
    height: 90px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const SubNavItem2= styled.ul`
    list-style: none;
    position: absolute;
    margin: 0;
    padding: 1rem 1rem;
    display: inline-blockflex;
    background: lightgrey;
    top: 90px;
    width: 100%;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem3= styled.li`
    position: relative;
    display: inline-block;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLinkTxt = styled(Link)`
    color: #0404d4;
    // color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const Bars= styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: tranlate(-100%, 75);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavLogo= styled.div`
    position: absolute;
    left: 0px;
    top: 1px;
    width: 220px;
    display: flex;
    align-items: center;
    zindex: 4200;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const NavRight= styled.div`
    position: absolute;
    top: 1px;
    right: 0px;
    width: 280px;
    //display: flex;
    align-items: center;
    //margin-left: -24px;
    zindex: 4200;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.li`
    position: relative;
    display: inline-block;
    align-items: center;
    height: 40px;
    top: 5px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn2 = styled.li`
    position: relative;
    display: inline-block;
    align-items: center;
    height: 90px;
    width: 10%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border--radius: 2px;
    background: #0404d4;
    padding: 0px 6px;
    font-family: 'Sriracha', cursive;
    font-size: 20px;
    color: #fff;
    border: none;
    outline:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const NavBtnLink2 = styled(Link)`
    border--radius: 2px;
    background: #b80320;
    padding: 6px 18px;
    font-family: 'Plaster', cursive;
    font-size: 20px;
    color: #fff;
    border: none;
    outline:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        // transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const NavBtnLink3 = styled(Link)`
    border--radius: 2px;
    background: #fff;
    padding: 2px 8px;
    font-family: 'Plaster', cursive;
    font-size: 14px;
    color: #b80320;
    border: none;
    outline:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        // transition: all 0.2s ease-in-out;
        background: #b80320;
        color: #fff;
    }
`;