export const fetchPlayers = (slug) => {

  let q = `query Attendees($tourneySlug: String!) {
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
          }`
  fetch('https://api.smash.gg/gql/alpha', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.SMASHGGKEY}`
    },
    body: JSON.stringify({
      query: q,
      variables: `{tourneySlug: ${slug}}`
    })
  })
    .then((response) => {
      console.log(response)
    });
}