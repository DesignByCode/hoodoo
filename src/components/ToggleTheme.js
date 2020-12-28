import React from 'react'

const ToggleTheme = ({onChange, theme}) => {
    return  (
        <div>
            <label>
                {theme.toUpperCase()} &nbsp;
                <input type='checkbox'  onChange={onChange} />
            </label>
        </div>
    )
}

export default ToggleTheme