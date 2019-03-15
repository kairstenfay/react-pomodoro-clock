import React, { Component } from 'react';
import beep from '../audio/A-Tone-His_Self-1266414414.mp3';

export default class Beep extends Component {

    componentWillMount() {
        console.log("mounted");
    }

    componentWillReceiveProps() {
        if (this.props.time === 0) {
            let element = document.getElementById("beep");
            element.play();
        }
    }

    render() {
        return(
            <audio id="beep" src={beep} />
        )
    }
}
