import Layout from "../components/Layout";
import React, { useState, useEffect } from 'react'
import TournamentSearch from "../components/TournamentSearch";

const LiveConfig = props => {
  const [tournamentSlug, setTournamentSlug] = useState('')
  const [allPlayers, setAllPlayers] = useState([])

  const onTournamentSubmit = async e => {
    e.preventDefault()
    //Get Tournament Slug From URL


    //Query SGG for Players(Maybe Put Fetch Into Another File?)
    fetch('https://api.smash.gg/gql/alpha', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer #{@token}"
      },
      body: JSON.stringify({
        query: q,
        variables: variables
      })
    });

    //Set State with all players so it can be passed to component allowing you to choose Max Two players
    console.log()
  }

  return (
    <>
      <Layout>
        <TournamentSearch onTournamentSubmit={onTournamentSubmit} />
      </Layout>
    </>
  )
}


export default LiveConfig
