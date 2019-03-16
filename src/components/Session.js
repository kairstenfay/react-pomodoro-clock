import React, { Component } from 'react';
// const CONSTANTS = require('../constants.js');
import Button from './Button';
import actions from '../actions/pomodoroActions'
import up_arrow from '../img/up.png';
import down_arrow from '../img/down.png';

const Session = props => (
    <fieldset id="session">
        <legend id="session-label">
            Session length
        </legend>
        <div id="session-length">
            <Button id="session-decrement" alt="down arrow" src={down_arrow} eventHandler={props.decrementor}/>
            {actions.convertSecondsToTime(props.length, false)}
            <Button id="session-increment" alt="up arrow" src={up_arrow} eventHandler={props.incrementor}/>
        </div>
    </fieldset>
);

export default Session;
