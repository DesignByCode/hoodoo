import React from 'react'
import PropTypes from 'prop-types'

const Panel = ({children, shadow, mode}) => {
    return  (
        <div className={`panel ${mode} ${shadow ? 'shadow--4': ''}`}>
            {children}
        </div>
    )
}

Panel.propTypes = {
    shadow: PropTypes.bool,
    mode: PropTypes.string
}

Panel.defaultProps = {
    shadow: false,
    mode: ''
}

export default Panel