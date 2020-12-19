import React from 'react'
import PropTypes from 'prop-types'

const Column = ({className, children, ...props}) => (
    <div className={className} {...props}>{children}</div>
)

Column.propTypes = {
    children: PropTypes.any
}

export default Column