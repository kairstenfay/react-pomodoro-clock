import React, { Component } from 'react';
// const CONSTANTS = require('../constants.js');
import Button from './Button';
import actions from '../actions/pomodoroActions';
import up_arrow from '../img/up.png';
import down_arrow from '../img/down.png';

export default class Break extends Component {

    render() {
        return(
            <fieldset id="break">
                <legend id="break-label">
                    Break length
                </legend>
                <div id="break-length">
                    <Button id="break-decrement" alt="down arrow" src={down_arrow}
                            eventHandler={this.props.decrementor} />

                    {actions.convertSecondsToTime(this.props.length, false)}

                    <Button id="break-increment" alt="up arrow" src={up_arrow}
                            eventHandler={this.props.incrementor} />
                </div>
            </fieldset>
        )
    }
}
