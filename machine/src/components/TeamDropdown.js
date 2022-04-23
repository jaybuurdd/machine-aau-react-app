//import React from 'react';
import React, { useState} from 'react';
//import { Button } from './Button';
//import { Link, NavLink } from 'react-router-dom';
import {NavItem3, SubNavItem2, NavLink3} from './SBElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DropdownStyle.css'
import MenuItems from './TeamMenu'

function TeamDropdown() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <SubNavItem2 /* onClick={handleClick} classname='dropdown-menu' */>
                {MenuItems.map((item, index) => {
                    return (
                        <NavItem3 key={index}>
                            <NavLink3 className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </NavLink3>
                        </NavItem3>
                    )
                })}
            </SubNavItem2>
        </>

    );
}

export default TeamDropdown;