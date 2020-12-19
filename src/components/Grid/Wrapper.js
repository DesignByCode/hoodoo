import React from 'react'
import PropTypes from 'prop-types'


const Wrapper = ({fluid, children, className, ...restProps}) => (
    <div className={`wrapper${fluid ? '--fluid' : ''} ${className}`} {...restProps}>
        {children}
    </div>
)

Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
    fluid: PropTypes.bool
}

Wrapper.defaultProps = {
    fluid: false,
    className: ''
}

export default Wrapper