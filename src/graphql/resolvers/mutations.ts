/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Context } from '../../lib/prismaClient'

export const mutations = {
  team: async (_parent: any, args: any, ctx: Context) => {
    return ctx.prisma.team.create({
      data: {
        ...args.team,
        conferenceId: +args.team.conferenceId,
      },
    })
  },
  teams: async (_parent: any, args: any, ctx: Context) => {
    return Promise.all(
      args.teams.map(async (team: any) =>
        // this workaround with `upsert` allows us to add new record and skip duplicates without throwing an error
        ctx.prisma.team.upsert({
          where: {
            name: team.name,
          },
          update: {},
          create: {
            name: team.name,
            conferenceId: +team.conferenceId,
          },
          include: {
            players: true,
            coach: true,
            conference: true,
          },
        }),
      ),
    )
  },
  // since we are using SQLite as a data layer unfortunatelly there is a constraint which does not allow `createMany` method for SQLite
  player: async (_parent: any, args: any, ctx: Context) => {
    return ctx.prisma.player.create({
      data: {
        ...args.player,
        teamId: +args.player.teamId,
      },
    })
  },
}
