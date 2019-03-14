import React, { Component } from 'react';
// const CONSTANTS = require('../constants.js');

export default class Session extends Component {

    render() {
        return(
            <div id="session">
                <div id="session-label">
                    Session length
                </div>
                <div id="session-length">
                    25
                </div>
                <div id="session-decrement">v</div>
                <div id="session-increment">^</div>
            </div>
        )
    }
}
