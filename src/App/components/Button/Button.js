import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

//es6: zero function style
const Button=(props)=>{
    console.log(props)
    return(
        <button className="Button" type={props.type}>
            {props.children}
        </button>
    );
}

// props presence and type check
Button.propTypes={
    children:PropTypes.any.isRequired,
    type:PropTypes.any
}
export default Button;