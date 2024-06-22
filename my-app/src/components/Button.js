import React from 'react';
import '../styles/Button.css';
import { Link } from 'react-router-dom';
    
    const STYLES = ['btn--primary', 'btn--outline'];
    const SIZES = ['btn--medium', 'btn--large'];
    
    export const Button = ({children, type, onClick, buttonStyle, buttonSize, linkTo}) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
        // if the button component has as style, that is true then run the button style we created for it
        // else the first option in the styles array
    
        return (
            <Link to={linkTo} className='btn-mobile'>
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                    {children} {/*Whatever you put in the button its going to render that*/}
                </button>
            </Link>
        )
    }