import React from 'react'

const Player = (props) => {
    console.log(props)
    const playerInfo = props.playerInfo
    
    return (
        <p key={playerInfo.id}>{playerInfo.player}</p>
    )
}

export default Player