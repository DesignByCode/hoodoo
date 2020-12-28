import { NavLink } from 'react-router-dom'
import ToggleTheme from './ToggleTheme'



const SideBarNav = ({toggleTheme, theme}) => {
    return  (
        <div className="sticky-sidebar" >
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
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
            <ToggleTheme theme={theme} onChange={toggleTheme}/>

        </div>
    )
}

export default SideBarNav