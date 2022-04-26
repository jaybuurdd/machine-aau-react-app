//import React from 'react';
import React, { useState} from 'react';
//import { Button } from './Button';
//import { Link} from 'react-router-dom';
import {SubNavItem2, SubNavItem3, NavLink4} from './SBElements';
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
                        <SubNavItem3 key={index}>
                            <NavLink4 className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </NavLink4>
                        </SubNavItem3>
                    )
                })}
            </SubNavItem2>
        </>

    );
}

export default MACHINEDropdown;