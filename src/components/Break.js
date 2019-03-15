import React, { Component } from 'react';
// const CONSTANTS = require('../constants.js');
import Emoji from './Emoji';
import actions from '../actions/pomodoroActions'

export default class Break extends Component {

    render() {
        return(
            <div id="break">
                <div id="break-label">
                    Break length
                </div>
                <div id="break-length">
                    {actions.convertSecondsToTime(this.props.length, false)}
                </div>
                <Emoji id="break-decrement" symbol="⬇️" label="down arrow" eventHandler={this.props.decrementor} />
                <Emoji id="break-increment" symbol="⬆️" label="up arrow" eventHandler={this.props.incrementor} />
            </div>
        )
    }
}
