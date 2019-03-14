import React, { Component } from 'react';
// const CONSTANTS = require('../constants.js');

export default class Clock extends Component {

    render() {
        return(
            <div id="clock">
                <div id="timer-label">
                    Session
                </div>
                <div id="time-left">
                    <time>{this.props.time}</time>
                </div>
            </div>
        )
    }
}
