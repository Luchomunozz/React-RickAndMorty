import React from 'react'
import './Card.css'

export const Card = ({info}) => {
    const {name, image} = info

    return (
        <div className="card">        
            <div className="image_card">
                <img src={image} alt="" />
            </div>
            <div className="info_card">
                <p>{name}</p>   
            </div>
        </div>
    )
}