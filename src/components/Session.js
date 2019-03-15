import React, { Component } from 'react';
// const CONSTANTS = require('../constants.js');
import Emoji from './Emoji';
import actions from '../actions/pomodoroActions'

export default class Session extends Component {

    render() {
        return(
            <div id="session">
                <div id="session-label">
                    Session length
                </div>
                <div id="session-length">
                    {actions.convertSecondsToTime(this.props.length, false)}
                </div>
                <Emoji id="session-decrement" symbol="⬇️" label="down arrow" eventHandler={this.props.decrementor} />
                <Emoji id="session-increment" symbol="⬆️" label="up arrow" eventHandler={this.props.incrementor} />
            </div>
        )
    }
}
