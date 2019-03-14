import React, { Component } from 'react';
import Clock from './Clock';
// const CONSTANTS = require('../constants.js');
import play_pause from '../img/play-pause.png';
import reset from '../img/reset.png';
import Break from './Break';
import Session from './Session';

export default class Pomodoro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 1500
        };
        this.countdown = this.countdown.bind(this);
        this.start = this.start.bind(this);
    }

    countdown() {
        this.setState({
            time: this.state.time - 1
        });
    }
    start() {
        setTimeout(this.countdown(), 1000);
    }
    render() {
        return(
            <div id="pomodoro">
                <Break />
                <Session />
                <Clock time={this.state.time} />
                <img id="start_stop" className="control" src={play_pause} alt="play/pause button"
                    onClick={this.start}/>
                <img id="reset" className="control" src={reset} alt="reset button" />
            </div>
        )
    }
}
