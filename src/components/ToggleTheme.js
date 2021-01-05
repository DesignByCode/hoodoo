import { useTheme, useThemeUpdate } from '../context/ThemeContextProvider'

const ToggleTheme = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    return  (
        <div>
            <button onClick={toggleTheme} className='btn btn--primary btn--block'>TOGGLE THEME</button>
            {darkTheme}
        </div>
    )
}

export default ToggleTheme