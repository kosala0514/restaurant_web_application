import React from "react";
import "./res_button.css"

const STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--success--solid",
    "btn--danger--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--success--outline",
    "btn--danger--outline",
]

const SIZES = ["btn--medium", "btn---small"]

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}