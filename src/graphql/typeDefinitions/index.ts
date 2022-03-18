import { gql } from 'apollo-server-express'
import * as Types from './types'
import * as Inputs from './inputs'
import { Query } from './query'
import { Mutation } from './mutation'
import { concatStringsFromObj } from '../../common/utils'

const typesQueriesAndMutations = { ...Types, ...Inputs, Query, Mutation }

export const typeDefs = gql(`${concatStringsFromObj(typesQueriesAndMutations)}`)
