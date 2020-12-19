import React from 'react'
import PropTypes from 'prop-types'


const Button = ({children, type, onClick, styleType}, ...restProps) => {
    return  (
        <button className={`btn btn--${styleType}`} type={type} onClick={onClick} {...restProps}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    styleType: 'primary',
    type: 'button'
}


export default Button