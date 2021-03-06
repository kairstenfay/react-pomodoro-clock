function convertSecondsToTime(time, showSeconds=true) {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (showSeconds) {
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    } else {
        return minutes;
    }
}


export default {convertSecondsToTime}