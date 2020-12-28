import React from 'react'
import { GiHamburgerMenu } from 'react-icons/all'
const NavigationIcon = ({onClick}) => (
    <div className="nav__icon" onClick={onClick}>
        <GiHamburgerMenu size={20}/>
    </div>
)

export default NavigationIcon