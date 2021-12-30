import React, { useState } from 'react'

const TournamentSearch = (props) => {
  const [searchText, setSearchText] = useState('')

  return (
    <form className="tSearch"
      onSubmit={props.onTournamentSubmit}>
      <input
        onChange={e => setSearchText(e.target.value)}
        type="search"
        aria-label="Search"
        width="50px">
      </input>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  )
}

export default TournamentSearch