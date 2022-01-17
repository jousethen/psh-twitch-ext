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
