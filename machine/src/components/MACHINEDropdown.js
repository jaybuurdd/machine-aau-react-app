//import React from 'react';
import React, { useState} from 'react';
//import { Button } from './Button';
//import { Link} from 'react-router-dom';
import {NavItem3, SubNavItem2, NavLink3} from './SBElements';
import './DropdownStyle.css'
import MenuItems from './MACHINEMenu'

function MACHINEDropdown() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <SubNavItem2>
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

export default MACHINEDropdown;