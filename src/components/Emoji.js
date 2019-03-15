import React from 'react';

const Emoji = props => (
    <span
        id={props.id}
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        onClick={props.eventHandler}
    >
        {props.symbol}
    </span>
);
export default Emoji;