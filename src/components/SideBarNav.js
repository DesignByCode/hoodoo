import { NavLink } from 'react-router-dom'



const SideBarNav = () => {
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
        </div>
    )
}

export default SideBarNav