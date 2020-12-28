import { useState, useEffect } from 'react'

const useTheme = () => {

    const [theme, setTheme] = useState('light')
    const [componentMounted, setComponentMounted] = useState(false)

    const setMode = (mode) => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const toggleTheme = () => {
        if (theme === 'light') {
            setMode('dark')
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        }else {
            setMode('light')
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        if (localTheme) {
            setTheme(localTheme)
        }else {
            setMode('light')
        }
        setComponentMounted(true)
    }, [])

    return [theme, toggleTheme, componentMounted]

}


export default useTheme