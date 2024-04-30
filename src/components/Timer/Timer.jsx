import React, { useState, useEffect } from "react";
import "./Timer.css"
import { CircularProgress } from "@mui/material";
const Timer = ({ targetDateStr }) => {
    const [timeRemaining, setTimeRemaining] = useState(null);


    useEffect(() => {
        // Parse the target date string into a Date object
        const targetDateLocal = new Date(targetDateStr);

        // Update the countdown timer every second
        const countdownTimer = setInterval(() => {
            // Get the current date and time
            const currentDate = new Date();

            // Calculate the difference in milliseconds between the target date and the current date
            const difference = targetDateLocal - currentDate;

            // Check if the target date has passed
            if (difference < 0) {
                clearInterval(countdownTimer); // Stop the countdown timer
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            // Convert the difference to days, hours, minutes, and seconds
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Update the remaining time
            setTimeRemaining({ days, hours, minutes, seconds });
        }, 1000); // Update every second

        // Clear the interval when the component unmounts
        return () => clearInterval(countdownTimer);
    }, [targetDateStr]);

    return (
        <div className="timer">
            <div className="item">
                <span className="time">{timeRemaining ? timeRemaining.days :  <CircularProgress color="success" size="1rem"/>} </span>
                <span className='label'>Days</span>
            </div>
            :
            <div className="item">
                <span className="time">{timeRemaining ? timeRemaining.hours : <CircularProgress color="success"  className="circularProgress" size="1rem"/>}</span>
                <span className='label'>Hours</span>
            </div>
            :
            <div className="item">
                <span className="time">{timeRemaining ? timeRemaining.minutes : <CircularProgress color="success"  className="circularProgress" size="1rem"/>}</span>
                <span className='label'>Minutes</span>
            </div>
            :
            <div className="item">
                <span className="time">{timeRemaining ? timeRemaining.seconds : <CircularProgress color="success"  className="circularProgress" size="1rem"/>}</span>
                <span className='label'>Seconds</span>
            </div>
        </div>
    );
};

export default Timer;
