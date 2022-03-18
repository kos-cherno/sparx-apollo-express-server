export const TeamTypes = `
  type Team {
    id: ID!
    name: String!
    players: [Player]!
    conference: Conference
  }

  type TeamByName {
    id: ID!
    players: [Player]!
    conference: Conference
  }
`
