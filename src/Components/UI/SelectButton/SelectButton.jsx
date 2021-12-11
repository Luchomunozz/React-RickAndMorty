import React from 'react'
import './SelectButton.css'

export const SelectButton = ({options, funct, text}) => {
    return (
        <select className="select_characters" onChange={funct}>
            <option value="">{text}</option>
            <option value="allCharacters">Todos los personajes</option>
            {
                options.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))
            }
        </select>
    )
}