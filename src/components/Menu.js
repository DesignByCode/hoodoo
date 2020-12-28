import React , { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useDimensions from '../hooks/useDimensions'

const LINKS = [
    {
        name: 'HOME',
        path: '/',
        children: []
    },
    {
        name: 'LAYOUT',
        path: '/layouts',
        children: []
    },
    {
        name: 'BUTTONS',
        path: '/buttons',
        children: []
    },
    {
        name: 'PANELS',
        path: '/panels',
        children: []
    },
    {
        name: 'DROPDOWN',
        path: '/dropdown',
        children: []
    },
]


const Menu = () => {

    const location = useLocation();

    const _ref = useRef()

    const {width} = useDimensions()

    const [open, setOpen] = useState(false)

    useEffect(() => {
        // navResize()
    })


    const toggleMenu = _ => {
        return open ? 'nav--open' : ''
    }

    const isActive = path => {
        return location.pathname === path ? 'active' : ''
    }

    const navResize = () => {
        if (width >= 900 ) {
            _ref.current.classList.remove('nav--open')
        }
    }

    return  (
        <nav className='nav nav--fixed'>
            <div className='nav__wrapper--fluid'>
                <div className='nav__brand'>
                    <Link to="/">HOODOO</Link>
                    <div className='nav__toggle' onClick={_ => {
                        setOpen(!open)
                    }}/>
                </div>
                <div ref={_ref} className={`nav__responsive justify--between ${toggleMenu()}`}>
                    <div className='nav__search nav-mr-5'>
                        <input type='text' placeholder="Search"/>
                    </div>
                    <ul className={`nav__links`}>
                        {
                            LINKS.map(link => (
                                <li key={link.name} className={`nav__item ${isActive(link.path)}`}>
                                    <Link to={link.path}>{link.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Menu