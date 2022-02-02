export const fetchPlayers = (slug: string) => {

  return [`query Attendees($tourneySlug: String!) {
  tournament(slug: $tourneySlug) {
    id
    name
    streamQueue {
      sets {
        slots {
          entrant {
            name
            participants {
              id
              user{
                slug
              }
              player {
                id
              }
            }
          }
        }
      }
    }
  }
}`, { tourneySlug: `${slug}` }
  ]

}

export const fetchSets = (pid: string) => {

  return [`query Sets ($pid: ID!){
  player(id: $pid) {
    id
    sets(perPage: 100, page: 1){
      nodes {
        id
        displayScore
        event {
          id
          name
          videogame{
            id
          }
          tournament {
            name
            startAt
          }
        }
      }
    }
  }
}`, {
      pid: [`${pid}`]
    }]

}
