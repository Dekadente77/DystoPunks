import React, { useEffect, useRef, useState } from 'react';
import '../styles/Global.css';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    TimerButton: {
        textAlign: 'center',    
        backgroundColor: '#C1D9F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(12px + 2vmin)',
        color: '#ffffff',
        fontFamily: 'm5x7',
        fontWeight: '900',
        margin: '0 auto',
        padding: '0 2vh 0 2vh',
        borderRadius: '0',

        '&:hover': {
            backgroundColor: '#8CFF9B',
            color: '#ffffff',
        }

    },
})

function TimerButton() {
    const TimerClass = useStyles();
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('Jun 18, 2021 19:07:07').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <div>
            <Button className={TimerClass.TimerButton} size="large" disabled>
                Launch in:&nbsp;
                <div>
                    <section>
                        {timerDays}D&nbsp;
                    </section>
                </div>
                <div>
                    <section>
                        {timerHours}H&nbsp;
                    </section>
                </div>
                <div>
                    <section>
                        {timerMinutes}M&nbsp;
                    </section>
                </div>
                <div>
                    <section>
                        {timerSeconds}S
                    </section>
                </div>
            </Button>
        </div>
    );
}

export default TimerButton;