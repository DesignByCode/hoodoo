import React , { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/all'

// const LINKS = [
//     {
//         name: 'HOME',
//         path: '/',
//         children: []
//     },
//     {
//         name: 'LAYOUT',
//         path: '/layouts',
//         children: []
//     },
//     {
//         name: 'BUTTONS',
//         path: '/buttons',
//         children: []
//     },
//     {
//         name: 'PANELS',
//         path: '/panels',
//         children: []
//     },
//     {
//         name: 'DROPDOWN',
//         path: '/dropdown',
//         children: []
//     },
// ]


const Menu = () => {

    const location = useLocation();
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    const isActive = path => {
        return location.pathname === path ? 'nav__link--active' : ''
    }

    return  (
        <nav className='nav nav--fluid nav--fixed shadow--1'>
            <div className='nav__wrapper gap justify--between'>
                <div className='nav__container'>
                    <div className='nav__brand'>
                        <Link to={`/`}>HOODOO</Link>
                    </div>
                    <div onClick={toggleMenu} className='nav__trigger'>
                        <GiHamburgerMenu  size={20}/>
                    </div>
                </div>

                <div className={`nav__responsive ${open && ' nav--open'}`}>
                    <ul className='nav__links'>
                        <li className={`nav__link ${isActive('/')}`}>
                            <NavLink to="/" exact>Home</NavLink>
                        </li>
                        <li className={`nav__link ${isActive('/buttons')}`}>
                            <NavLink to="/buttons" exact>Buttons</NavLink>
                        </li>
                        <li className={`nav__link ${isActive('/panels')}`}>
                            <NavLink to="/panels" exact>Panels</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu