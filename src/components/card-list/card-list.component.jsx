import React from 'react'

import { Card } from '../card/card.component'

import './card-list.styles.css'

export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.flightData.map(flight => (
                <Card key={flight.id} flight={flight} />
            ))}
        </div>
    )
}