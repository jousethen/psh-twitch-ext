import Layout from "../components/Layout";
import React, { useState, useEffect } from 'react'
import TournamentSearch from "../components/TournamentSearch";
import { fetchPlayers } from "../lib/queries";
import PlayerContainer from "../components/PlayerContainer";

const LiveConfig = props => {
  const [tournamentSlug, setTournamentSlug] = useState('')
  const [allPlayers, setAllPlayers] = useState([])

  const onTournamentSubmit = async (e, slug) => {
    e.preventDefault()

    //Get Tournament Slug From URL
    slug = slug.substring(slug.indexOf("tournament/") + 11)
    //Delete everything after the slug
    slug = slug.split("/")[0]

    const [query, variables] = fetchPlayers(slug)
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
    setAllPlayers(result.data.tournament.streamQueue[0].sets[0].slots);
    console.log(allPlayers)
  }

  if (allPlayers.length !== 0) {
    return (
      <>

      </>
    )
  }
  else {
    return (
      <>
        <Layout>
          <TournamentSearch onTournamentSubmit={onTournamentSubmit} />
        </Layout>
      </>
    )
  }

}


export default LiveConfig
