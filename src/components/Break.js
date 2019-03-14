import React, { Component } from 'react';
// const CONSTANTS = require('../constants.js');

export default class Break extends Component {

    render() {
        return(
            <div id="break">
                <div id="break-label">
                    Break length
                </div>
                <div id="break-length">
                    5
                </div>
                <div id="break-decrement">v</div>
                <div id="break-increment">^</div>
            </div>
        )
    }
}
