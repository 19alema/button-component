import React from 'react'
import './buttonType.css';

function ButtonType({status,color, size,variant, startIcon, endIcon}) {
    return (
        <div>
            <p>
                &lt; button {variant && `variant="${variant}"`} {
                     size && `size="${size}"`
                 } {
                     color && `color="${color}"`
                 } {
                     endIcon && `variant="${endIcon}"`
                 } {
                     startIcon && `startIcon="${startIcon}"`
                 } {
                     status && `${status}`
                 }
                /&gt;
            </p>
        </div>
    )
}
export default ButtonType
