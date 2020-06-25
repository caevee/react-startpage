import React, { useState } from 'react'

export default function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000)

    return (
        <div className="clock">
            <p>{time}</p>
        </div>
    )
}
