export const Query = `
  type Query {
    conferences: [Conference]
    teams: [Team]
    team(teamName: String!): [TeamByName]
    players: [Player]
    coaches: [Coach]
  }
`
