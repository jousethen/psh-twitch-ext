import Layout from "../components/Layout";
import React, { useState, useEffect } from 'react'
import TournamentSearch from "../components/TournamentSearch";

const Panel = props => {
  const [tournamentFound, setTournamentFound] = useState(false)

  const onTournamentSubmit = async e => {
    e.preventDefault()
    setTournamentFound(true)
    console.log(tournamentFound)
  }
  return (
    <>
      <Layout>
        <TournamentSearch onTournamentSubmit={onTournamentSubmit} />
      </Layout>
    </>
  )
}


export default Panel
