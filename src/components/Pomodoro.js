import React, { Component } from 'react';
import Clock from './Clock';
// const CONSTANTS = require('../constants.js');
import Emoji from './Emoji';
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
        this.reset = this.reset.bind(this);
    }

    countdown() {
        if (this.state.time > 0) {
            this.setState({
                time: this.state.time - 1
            });
            this.start();  // what is this witchcraft??
        }
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

    reset() {
        clearTimeout(this.state.timeout);
        this.setState({
            time: 1500,
            playing: false,
            timeout: null
        })
    }

    render() {
        return(
            <div id="pomodoro">
                <Break />
                <Session />
                <Clock time={this.state.time} />
                <Emoji id="start_stop" symbol="⏯" label="play/pause" eventHandler={this.togglePlay} />
                <Emoji id="reset" symbol="🔄" label="reset" eventHandler={this.reset}/>
            </div>
        )
    }
}
