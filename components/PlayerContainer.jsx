import React, { useState, useEffect } from 'react'
import { fetchPlayers, fetchSets } from '../lib/queries'

const PlayerContainer = (props) => {
  const [player1, setPlayer1] = useState(props.players[0].entrant)
  const [player2, setPlayer2] = useState(props.players[1].entrant)

  const refresh = async () => {
    const [query, variables] = fetchPlayers(props.slug)
    const res = await fetch(
      process.env.APIURL,
      {
        body: JSON.stringify({
          query: query,
          variables: variables
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SMASHGGKEY}`
        },
        method: 'POST'
      }
    )

    const result = await res.json()

    console.log(result.data.tournament.streamQueue[0].sets[0].slots)
    //Set State with all players so it can be passed to component allowing you to choose Max Two players
    setPlayer1(result.data.tournament.streamQueue[0].sets[0].slots[0].entrant);
    setPlayer2(result.data.tournament.streamQueue[0].sets[0].slots[1].entrant);
  }

  useEffect(() => {

  });

  return (
    <>
      <h3>{player1.name} <span style={{ color: "red" }}>VS</span> {player2.name}</h3>
      <button className="btn btn-outline-info" onClick={refresh}>Refresh</button>
      <button className="btn btn-outline-info" onClick={refresh}>Refresh</button>
    </>
  )
}

export default PlayerContainer