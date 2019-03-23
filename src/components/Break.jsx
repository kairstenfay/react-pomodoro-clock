import React from 'react';
import Button from './Button';
import actions from '../actions/pomodoroActions';
import up_arrow from '../img/up.png';
import down_arrow from '../img/down.png';

const Break = props => (

        <fieldset id="break">
            <legend id="break-label">
                Break length
            </legend>
            <div id="break-length">
                <Button id="break-decrement" alt="down arrow" src={down_arrow}
                        eventHandler={props.decrementor} />

                {actions.convertSecondsToTime(props.length, false)}

                <Button id="break-increment" alt="up arrow" src={up_arrow}
                        eventHandler={props.incrementor} />
            </div>
        </fieldset>
);
export default Break;
