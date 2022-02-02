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

export const fetchSets = (slug: string) => {

  return [`query Users($slug: String, $pid: [ID]) {
        user(slug: $slug) {
          discriminator
          events(query: { page: 1, perPage: 100, filter: { videogameId: [33945] } }) {
            nodes {
              tournament{
                name
                startAt
              }
              sets(filters: { playerIds: $pid }) {
                nodes {
                  id
                  displayScore
                }
              }
            }
          }
        }
      }`, {
      slug: `${slug}`,
      pid: [`${pid}`],
      gameID: `${gameID}`
    }]

}
