import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

//es6: raw function style
const Button=(props)=>{
    console.log(props)
    return(
        <button className={props.classColor ? 'Button '+ props.classColor:'Button'} 
        type={props.type} 
        // pass props to css style => 
        // first {} -> javascript snippet ; second {} -> javascript Object
        // spread operator => verser props.style to current object container
        // that's to say if backgroundColor defined in props.style, 
        // this one will replace the previous "backgroundColor: props.bgColor"
        style={{backgroundColor: props.bgColor, ...props.style}}
        onClick={
            // comparing to a classic funciton, function(evt){}
            // raw function keep "this" point to the declared object
            // use always raw funciton if possible
            (evt) => {
                props.onClickEvent('bla bla');
            }
        }
        // method 2: pass child's funciton ref directly to the parent
        // onClick={props.onClickEvent}
        >
        {/* style={props.style, ...{backgroundColor: props.bgColor}}> */}
            {props.children}
        </button>
    );
}

// props presence and type check => ressournce consumption 
// useful to show component usage hint in console
Button.propTypes={
    children:PropTypes.any.isRequired,
    type:PropTypes.any,
    classColor:PropTypes.string,
    bgColor:PropTypes.string,
    style:PropTypes.object,
    // function as PropTypes 
    onClickEvent:PropTypes.func.isRequired,
}
// default props definition
Button.defaultProps={
    children: 'default button',
    bgColor: 'orange',
    // default function do nothing
    onClickEvent:()=>{}
}

export default Button;