//import React from 'react';
import React, { useState} from 'react';
//import { Button } from './Button';
//import { Link, NavLink } from 'react-router-dom';
import {SubNavItem3, SubNavItem2B, NavLink4} from './SBElements';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DropdownStyle.css'
import MenuItems from './TeamMenu'

function TeamDropdown() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <SubNavItem2B /* onClick={handleClick} classname='dropdown-menu' */>
                {MenuItems.map((item, index) => {
                    return (
                        <SubNavItem3 key={index}>
                            <NavLink4 className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </NavLink4>
                        </SubNavItem3>
                    )
                })}
            </SubNavItem2B>
        </>

    );
}

export default TeamDropdown;