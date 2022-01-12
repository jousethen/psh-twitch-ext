import React, { useState } from 'react'

const PlayerContainer = (props) => {
  const [searchText, setSearchText] = useState('')
  const [player1, setPlayer1] = useState({})
  const [player2, setPlayer2] = useState({})


  return (
    <>


      <h1>{player1.gamerTag ? player1.gamerTag : "Choose Player 1"} vs {player1.gamerTag ? player2.gamerTag : "Choose Player 2"}</h1>

      <ul className="player-list">
        {props.players.map(player => (
          <li key={player.player.id}>{player.gamerTag}</li>
        ))}
      </ul>


    </>
  )
}

export default PlayerContainer