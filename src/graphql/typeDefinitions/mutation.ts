export const Mutation = `
  type Mutation {
    player(player: PlayerInput!): Player
    team(team: TeamInput!): Team
    teams(teams: [TeamInput!]): [Team]
  }
`
