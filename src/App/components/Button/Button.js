import React from 'react'
import './Button.css'

//es6: zero function style
const Button=(props)=>{
    console.log(props)
    return(
        <button className="button">
            {props.text}
        </button>
    );
}

export default Button;