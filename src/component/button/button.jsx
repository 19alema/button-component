import React from 'react'
import './button.css';

function Button({text, icon1, icon2, btn}) {
    return (
        <div>
            <button style={btn}>
                {icon1}{text}{icon2}
            </button>
        </div>
    )
}
export default Button
