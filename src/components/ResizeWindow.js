import React, { useState, useEffect } from 'react'

const ResizeWindow = () => {

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
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })


    return  (
        <div className="dimensions">
            <strong>Dimensions: height: {dimensions.height} - width: {dimensions.width }</strong>
        </div>
    )
}

export default ResizeWindow