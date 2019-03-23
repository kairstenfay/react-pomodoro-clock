import React, { Component } from 'react';
import Clock from './Clock';
import Button from './Button';
import Break from './Break';
import Session from './Session';
import Beep from './Beep';
import reset from '../img/reset.png';
import start_stop from '../img/play-pause.png';
import Checkmarks from './Checkmarks';

const DEFAULT_SESSION_LENGTH = 1500;

export default class Pomodoro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: DEFAULT_SESSION_LENGTH,
            playing: false,
            timeout: null,
            break_length: 300,
            session_length: DEFAULT_SESSION_LENGTH,
            onBreak: false,
            cycles: 0
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
            let cycles = this.state.cycles;

            if (!this.state.onBreak) {
                time = this.state.break_length;
                cycles++;

            } else {
                time = this.state.session_length;
            }
            this.setState({
                time: time,
                onBreak: !this.state.onBreak,
                cycles: cycles
                });
            this.start();
        }
    }

    togglePlay() {
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
            timeout: null,
            cycles: 0
        });

        // Stop audio and rewind it to beginning
        let element = document.getElementById("beep");
        element.pause();
        element.currentTime = 0;
    }

    incrementBreak() {
        console.log("register click");
        if (this.state.break_length < 3600) {
            this.setState({
                break_length: this.state.break_length + 60
            })
        }
    }

    decrementBreak() {
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
            })
        }
    }

    decrementSession() {
        if (this.state.session_length > 60) {
            let updatedSessionLength = this.state.session_length - 60;
            this.setState({
                session_length: updatedSessionLength,
            });
            if (!this.state.playing) {
                this.setState({
                    time: updatedSessionLength
                });
            }
        }
    }

    render() {
        return(
            <div id="pomodoro">
                <Clock time={this.state.time} onBreak={this.state.onBreak} />

                <div id="controls">
                    <Button id="start_stop" alt="play/pause" src={start_stop} eventHandler={this.togglePlay} />
                    <Button id="reset" alt="reset" src={reset} eventHandler={this.reset}/>
                </div>
                <div id="labels">
                <Break length={this.state.break_length} incrementor={this.incrementBreak}
                       decrementor={this.decrementBreak} />
                <Session length={this.state.session_length} incrementor={this.incrementSession}
                         decrementor={this.decrementSession} />
                </div>

                <Checkmarks cycles={this.state.cycles} />
                <Beep time={this.state.time} />
            </div>
        )
    }
}
