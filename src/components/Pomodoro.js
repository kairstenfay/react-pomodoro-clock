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
            time: 1500,
            playing: false,
            timeout: null
        };
        this.countdown = this.countdown.bind(this);
        this.start = this.start.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
    }

    countdown() {
        this.setState({
            time: this.state.time - 1
        });
        this.start();  // what is this witchcraft??
    }

    togglePlay() {
        console.log("register toggle");
        if (!this.state.playing) {
            this.start();
        } else {
            clearTimeout(this.state.timeout);
        }

        this.setState({
            playing: !this.state.playing
        })
    }

    start() {
        this.setState({
            timeout: setTimeout(this.countdown, 1000)
        })
    }

    render() {
        return(
            <div id="pomodoro">
                <Break />
                <Session />
                <Clock time={this.state.time} />
                <img id="start_stop" className="control" src={play_pause} alt="play/pause button"
                    onClick={this.togglePlay}/>
                <img id="reset" className="control" src={reset} alt="reset button" />
            </div>
        )
    }
}
