import { Link, NavLink, useLocation } from 'react-router-dom'
import NavigationIcon from './NavigationIcon'
import { useState, useEffect } from 'react'

const Navigation = () => {
    const [open, setOpen] = useState(false)

    const location = useLocation()

    useEffect(() => {
        windowWidth()

    }, [])

    const isActive = path => {
        return location.pathname === path ? 'active': ''
    }

    const toggleMenu = () => {
        setOpen(!open)
    }

    const windowWidth = e => {
        document.addEventListener('resize', () => [
            console.log(window.innerWidth)
        ])
    }

    return  (
        <nav className={`nav nav--fixed shadow--1  ${open && 'nav--open'}`}>
            <div className='nav__wrapper--fluid'>
                <div className="nav__brand">
                    <Link to="/">✨Hoodoo</Link>
                </div>
                <ul className={`nav__links`}>
                    <li className={`nav__link ${isActive('/')}`}>
                        <NavLink  exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className={`nav__link ${isActive('/buttons')}`}>
                        <NavLink  exact to="/buttons">
                            Buttons
                        </NavLink>
                    </li>
                    <li className={`nav__link ${isActive('/panels')}`}>
                        <NavLink  exact to="/panels">
                            Panels
                        </NavLink>
                    </li>
                    <li className={`nav__link nav__link__dropdown`}>
                        <NavLink to="/dropdown">
                            Dropdown
                        </NavLink>
                    </li>
                </ul>
                <NavigationIcon onClick={() => {
                    toggleMenu()
                }}/>
            </div>
        </nav>
    )
}

export default Navigation