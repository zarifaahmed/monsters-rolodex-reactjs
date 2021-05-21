import React from 'react'
import Card from './Card'
import './card-list.css'

const CardList = (props) => {
    return (
        <div className="card-list">
        {props.monsters.map(monster => ( 
             <Card key={monster.id} monster={monster}/>
            ))}
        </div>
    )
}

export default CardList
