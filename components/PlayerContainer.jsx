import React, { useState } from 'react'

const PlayerContainer = (props) => {
  const [searchText, setSearchText] = useState('')
  const [player1, setPlayer1] = useState(props.players[0].entrant)
  const [player2, setPlayer2] = useState(props.players[1].entrant)

  return (
    <>
      <h3>{player1.name} <span style={{ color: "red" }}>VS</span> {player2.name}</h3>



    </>
  )
}

export default PlayerContainer