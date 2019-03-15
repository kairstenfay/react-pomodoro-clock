import React, { Component } from 'react';
// const CONSTANTS = require('../constants.js');
import actions from '../actions/pomodoroActions'

export default class Clock extends Component {

    render() {
        let label = this.props.onBreak ? 'Break' : 'Session';

        return(
            <div id="clock">
                <div id="timer-label">
                    {label}
                </div>
                <div id="time-left">
                    {actions.convertSecondsToTime(this.props.time)}
                </div>
            </div>
        )
    }
}
