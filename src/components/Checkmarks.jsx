import React from 'react';
import Emoji from './Emoji';

const Checkmarks = function(props) {
    let checkmarks = [];
    for (let i = 0; i < props.cycles; i++) {
       checkmarks.push(<Emoji id="start_stop" symbol="✔️" label="check-mark" />);
    }

    return (
        <div id="checkmarks">
            {checkmarks}
        </div>

    );
};
export default Checkmarks;
