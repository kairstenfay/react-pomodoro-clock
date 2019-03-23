import React from 'react';
import actions from '../actions/pomodoroActions'

const Clock = function(props) {

    let label = props.onBreak ? 'Break' : 'Session';

    return(
        <div id="clock">
            <div id="timer-label">
                {label}
            </div>
            <div id="time-left">
                {actions.convertSecondsToTime(props.time)}
            </div>
        </div>
    )
};

export default Clock;