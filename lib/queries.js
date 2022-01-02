export const fetchPlayers = (slug) => {

  return [`query Attendees($tourneySlug: String!) {
            tournament(slug: $tourneySlug) {
              id
              name
              participants(query: {}) {
                nodes {
                  gamerTag
                  player {
                    id
                  }
                }
              }
            }
          }`, `{tourneySlug: ${slug}}`
  ]

}
