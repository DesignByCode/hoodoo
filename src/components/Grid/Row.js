import React from 'react'
import PropTypes from 'prop-types'

const Row = ({className, children, direction, ...props}) => {
    return (
        <div className={`row${direction && direction === 'reverse'? ' row--reverse' : '' } ${className}` } {...props}>
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