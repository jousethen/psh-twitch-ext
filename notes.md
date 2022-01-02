# Query all participants from a particular tournament
query Attendees($tourneySlug: String!) {
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
},
{
  "tourneySlug": "arc-revo-america-2021-east-qualifier"
}
