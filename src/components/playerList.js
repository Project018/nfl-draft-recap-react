import React from 'react'
import Player from "./player"

const PlayerList = (props) => {
    console.log(props)
    // TODO: Add more player details to state/object and player.js file
    return (
        <section>
            { 
                props.playerInfo.map((player, id) => <Player key={id} playerInfo={player} /> ) 
            }
        </section>
    )
}

export default PlayerList