export const fetchPlayers = (slug) => {

  return [`query Attendees($tourneySlug: String!) {
            tournament(slug: $tourneySlug) {
              id
              name
              participants(query: {perPage: 500}) {
                nodes {
                  gamerTag
                  prefix
                  player {
                    id
                  }
                }
              }
            }
          }`, { tourneySlug: `${slug}` }
  ]

}
