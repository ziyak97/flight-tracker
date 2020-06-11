import React from 'react'

import './card.styles.css'

export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={'https://cdn.dribbble.com/users/839429/screenshots/4519779/plane-travel-icon-rebound2.gif'} alt="monster" />
            <h1>{props.flight.flight_no}</h1>
            <p>From: {props.flight.flight_from}</p>
            <p>To: {props.flight.flight_to}</p>
            <p>Time: {props.flight.time}</p>
            {
                props.flight.delayed ?
                    <p className='red'>Flight is delayed by {props.flight.delayedBy}</p>
                    :
                    <p className='green'>Flight is on time</p>
            }
        </div>
    )
}