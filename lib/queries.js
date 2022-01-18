export const fetchPlayers = (slug) => {

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

export const fetchSets = (slug) => {

  return [``, { tourneySlug: `${slug}` }]

}
