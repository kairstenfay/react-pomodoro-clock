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
            time: 10, // 1500,
            playing: false,
            timeout: null,
            break_length: 300,
            session_length: 1500,
            onBreak: false
        };
        this.countdown = this.countdown.bind(this);
        this.start = this.start.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.reset = this.reset.bind(this);
        this.decrementBreak = this.decrementBreak.bind(this);
        this.incrementBreak = this.incrementBreak.bind(this);
        this.decrementSession = this.decrementSession.bind(this);
        this.incrementSession = this.incrementSession.bind(this);
    }

    countdown() {
        if (this.state.time > 0) {
            this.setState({
                time: this.state.time - 1
            });
            this.start();  // what is this witchcraft??
        } else { // this.state.time === 0
            let time;
            if (!this.state.onBreak) {
                time = this.state.break_length;
            } else {
                time = this.state.session_length;
            }
            this.setState({
                time: time,
                onBreak: !this.state.onBreak
                });
            this.start();
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
            break_length: 300,
            session_length: 1500,
            playing: false,
            timeout: null
        })
    }

    incrementBreak() {
        if (this.state.break_length < 60) {
            this.setState({
                break_length: this.state.break_length + 60
            })
        }
    }

    decrementBreak() {
        console.log("register click");
        if (this.state.break_length > 60) {
            this.setState({
                break_length: this.state.break_length - 60
            })
        }
    }

    incrementSession() {
        if (this.state.session_length < 3600) { // 60 minutes todo
            let updatedSessionLength = this.state.session_length + 60;
            this.setState({
                session_length: updatedSessionLength,
                time: updatedSessionLength
            })
        }
    }

    decrementSession() {
        if (this.state.session_length > 60) {
            let updatedSessionLength = this.state.session_length - 60;
            this.setState({
                session_length: updatedSessionLength,
                time: updatedSessionLength
            })
        }
    }

    render() {
        return(
            <div id="pomodoro">
                <Break length={this.state.break_length} incrementor={this.incrementBreak}
                decrementor={this.decrementBreak} />
                <Session length={this.state.session_length} incrementor={this.incrementSession}
                decrementor={this.decrementSession} />
                <Clock time={this.state.time} onBreak={this.state.onBreak} />
                <Emoji id="start_stop" symbol="⏯" label="play/pause" eventHandler={this.togglePlay} />
                <Emoji id="reset" symbol="🔄" label="reset" eventHandler={this.reset}/>
            </div>
        )
    }
}
