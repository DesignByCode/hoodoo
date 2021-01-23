import { NavLink } from 'react-router-dom'
import ToggleTheme from './ToggleTheme'



const SideBarNav = ({toggleTheme, theme}) => {
    return  (
        <div className="sticky-sidebar" >
            <ToggleTheme/>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/layout">Layout</NavLink>
                </li>
                <li>
                    <NavLink to="/navigation">Navigation</NavLink>
                </li>
                <li>
                    <NavLink to="/form">Form</NavLink>
                </li>
                <li>
                    <NavLink to="/buttons">Buttons</NavLink>
                </li>
                <li>
                    <NavLink to="/panels">Panels</NavLink>
                </li>
                <li>
                    <NavLink to="/tables">Tables</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default SideBarNav