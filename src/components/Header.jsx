
import React from 'react'

export default function Header() {
    function getTime() {
        const time = new Date().getHours();
        if (time >= 18) {
            return <span>Good evening</span>
        } else if (time >= 12) {
            return <span>Hello</span>
        } else {
            return <span>Good morning</span>
        }
    }
    return (
        <div>
            <h1>{getTime()} Caevee!</h1>
        </div>
    )
}
