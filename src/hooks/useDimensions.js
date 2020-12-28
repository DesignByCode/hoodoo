import { useState, useEffect } from 'react'


const debounce = (fn, ms) => {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply()
        }, ms)
    }
}

const useDimensions = () => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {

        let handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        const debounceHandler = debounce(handleResize, 100)
        window.addEventListener('resize', debounceHandler)
        return () => {
            window.removeEventListener('resize', debounceHandler)
        }
    })

    return dimensions
}

export default useDimensions