import React, { useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date);
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        setDate(new Date)
        const id: number = window.setInterval(() => {
            setDate(new Date)
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

     const stringTime = date.toLocaleTimeString()//<p>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()< 10 ? `0${date.getSeconds()}` : date.getSeconds()}</p>||<br />; 
     const stringDate = date.toLocaleDateString()//<p>{date.getFullYear()}:{date.getMonth()< 10? `0${date.getMonth()+1}`: date.getMonth()+1}:{date.getDate()}</p>||<br />;

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                <div>
                    {stringDate}
                </div>
            ): <br />}

            <SuperButton text={'start'} onClick={start} />
            <SuperButton text={'stop'} onClick={stop} />

        </div>
    );
}

export default Clock;
