import { Link, NavLink } from 'react-router-dom'
import NavigationIcon from './NavigationIcon'


const Navigation = ({children}) => {
    return  (
        <nav className="nav shadow--1">
            <div className='nav__wrapper--fluid'>
                <div className="nav__brand">
                    <Link to="/">✨Hoodoo</Link>
                </div>
                <ul className='nav__links'>
                    <li className='nav__item'>
                        <NavLink exact activeClassName="active" to="/">Home</NavLink>
                    </li>
                </ul>
                <NavigationIcon/>
            </div>
        </nav>
    )
}

export default Navigation