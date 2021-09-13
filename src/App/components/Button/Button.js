import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

//es6: zero function style
const Button=(props)=>{
    console.log(props)
    return(
        <button className={props.classColor ? 'Button '+ props.classColor:'Button'} type={props.type}>
            {props.children}
        </button>
    );
}

// props presence and type check => ressournce consumption 
// useful to show component usage hint in console
Button.propTypes={
    children:PropTypes.any.isRequired,
    type:PropTypes.any,
    classColor:PropTypes.string
}
// default props definition
Button.defaultProps={
    children: 'default button'
}

export default Button;