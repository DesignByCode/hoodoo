import React from 'react'
import PropTypes from 'prop-types'

const Panel = ({children, shadow}) => {
    return  (
        <div className={`panel ${shadow ? 'shadow--1': ''}`}>
            {children}
        </div>
    )
}

Panel.propTypes = {
    shadow: PropTypes.bool
}

Panel.defaultProps = {
    shadow: false
}

export default Panel