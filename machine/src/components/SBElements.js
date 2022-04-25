import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.div`
    position: fixed;
    top: 0vw;
    width: 100%;
    background: white;
    height: 4.8vw;
    display: flex;
    justify-content: space-between;
    //padding: 0.5rem calc((100vw - 1000px) / 2);
    zindex: 1100;
`;

export const Nav2 = styled.div`
    position: fixed;
    top: 4.85vw;
    width: 100%;
    background: lightgrey;
    height: 5.6vw;
    display: flex;
    justify-content: space-between;
    //padding: 0.5rem calc((100vw - 1000px) / 3.25);
    zindex: 1100;
`;

export const Foot = styled.div`
    position: relative;
    //top: 60px;
    width: 100%;
    background: #0404d4;
    height: 9.6vw;
    zindex: 1000;
`;


export const FootDiv= styled.div`
    position: relative;
    display: block;
    //width: 220px;
    //width: 100%;
    height: 3vw;
    align-items: center;
    align-text: center;
    zindex: 1100;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const NavLink = styled(Link)`
    color: #0404d4;
    display: flex;
    align-items: center;
    font-family: 'Sriracha', cursive;
    //font-size: 18px;
    font-size: 1.25vw;
    text-decoration: none;
    padding: 0vw 0.51vw;
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
    display: block;
    align-items: center;
    font-family: 'Plaster', cursive;
    //font-size: 24px;
    font-size: 1.29vw;
    text-decoration: none;
    padding: 0vw 0.51vw;
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
    color: #fff;
    display: flex;
    align-items: center;
    font-family: 'Plaster', cursive;
    //font-size: 20px;
    font-size: 1.2vw;
    text-decoration: none;
    padding: 0vw 0.51vw;
    border-radius: 50%;
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
    position: relative;
    top: 0%;
    left: 20%;
    display: flex;
    align-items: center;
    text-align: center;
    zindex: 4200;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const NavMenuDiv= styled.div`
    display: inline-block;
    position: relative;
    //width: 220px;
    width: 70%;
    align-items: center;
    zindex: 4200;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const NavMenu2= styled.ul`
    list-style: none;
    position: relative;
    margin: 0;
    padding: 0;
    top: 35%;
    //left: 5%;
    align-items: center;
    text-align: center;
    zindex: 4200;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem= styled.li`
    position: relative;
    display: inline-block;
    align-items: center;
    height: 4.8vw;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem2= styled.li`
    position: relative;
    display: inline-block;
    align-items: center;
    height: 1.8vw;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const SubNavItem2= styled.ul`
    list-style: none;
    position: absolute;
    margin: 0;
    padding: 0.25vw 0.25vw;
    display: inline-blockflex;
    background: lightgrey;
    top: 1.75vw;
    //width: 100%;
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
    height: 1.8vw;

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
    padding: 0 0vw;
    height: 4.8vw;
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
    position: relative;
    display: inline-block;
    //left: 0px;
    top: 1px;
    //width: 220px;
    width: 12%;
    align-items: center;
    zindex: 4200;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const NavRight= styled.div`
    position: relative;
    top: 1px;
    //right: 0px;
    //width: 280px;
    width: 15%;
    align-items: center;
    zindex: 4200;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.li`
    position: relative;
    display: inline-block;
    align-items: center;
    height: 4vw;
    top: 5px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn2 = styled.li`
    position: relative;
    display: inline-block;
    align-items: center;
    height: 9vw;
    width: 10%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn3 = styled.li`
    position: relative;
    display: inline-block;
    align-items: center;
    height: 9vw;
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
    //font-size: 20px;
    font-size: 1.28vw;
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
    padding: 0.27vw 0.4vw;
    font-family: 'Plaster', cursive;
    //font-size: 20px;
    font-size: 1.19vw;
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

