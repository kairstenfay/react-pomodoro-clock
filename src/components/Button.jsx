import React from 'react';

const Button = props => (
    <img id={props.id} className="button"
         alt={props.alt}
         src={props.src}
         onClick={props.eventHandler} />
);
export default Button;