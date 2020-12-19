import React from 'react'
import PropTypes from 'prop-types'

const Row = ({children, direction, ...props}) => {
    return (
        <div className={`row${direction && direction === 'reverse'? ' row--reverse' : ''}`} {...props}>
            {children}
        </div>
    )
}

Row.propTypes = {
    children: PropTypes.any.isRequired,
    direction: PropTypes.string
}

Row.defaultProps = {
    direction: ''
}

export default Row