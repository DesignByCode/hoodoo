import React from 'react'
import PropTypes from 'prop-types'

const PanelHeader = ({children}, ...restProps) => {
    return  (<header className='panel__header' {...restProps}>{children}</header>)
}


PanelHeader.propTypes = {
    children: PropTypes.any.isRequired
}

export default PanelHeader