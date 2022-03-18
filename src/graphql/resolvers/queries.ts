/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Context } from '../../lib/prismaClient'

export const queries = {
  // returns all Conference records
  conferences: async (_parent: any, _args: any, ctx: Context) => {
    return ctx.prisma.conference.findMany()
  },
  // returns all Teams records
  teams: async (_parent: any, _args: any, ctx: Context) => {
    return ctx.prisma.team.findMany({
      include: {
        conference: true,
        players: true,
      },
    })
  },
  // returns all Players records
  players: async (_parent: any, _args: any, ctx: Context) => {
    return ctx.prisma.player.findMany({
      include: {
        team: true,
      },
    })
  },
  // returns all Coaches records
  coaches: async (_parent: any, _args: any, ctx: Context) => {
    return ctx.prisma.coach.findMany({
      include: {
        team: true,
      },
    })
  },
  // returns single team by team name with return fields projection
  team: async (_parent: any, args: any, ctx: Context) => {
    return ctx.prisma.team.findMany({
      where: {
        name: args.teamName,
      },
      select: {
        id: true,
        players: true,
        coach: true,
        conference: true,
      },
    })
  },
}
