import React, {useState, useEffect} from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {setTime(new Date())}, 1000)

        return () => {clearInterval(intervalId)};

    }, [])

    useEffect(() => {
        document.title = "Digital Clock"

    })

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = hours >= 12 ? "PM" :"AM"

        hours = hours % 12 || 12;

        return `${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(seconds)} ${zeroPad(meridiem)}`

    }

    function zeroPad(number){

        return (number < 10 ? "0" : "") + number
    }
    
    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>);

}
export default DigitalClock