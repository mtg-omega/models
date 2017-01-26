import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import {
  GraphQLUUID,
} from 'graphql-custom-types';

import { Set as SetSql } from '../sql';

const Set = new GraphQLObjectType({
  name: 'set',
  description: 'A set of cards',
  fields: () => ({
    id: { type: GraphQLUUID },
    code: { type: GraphQLString },
  }),
});

module.exports = {
  sets: {
    type: new GraphQLList(Set),
    args: {
      code: { type: GraphQLString },
    },
    resolve: (source, where) => SetSql.findAll({ where }),
  },

  set: {
    type: Set,
    args: {
      code: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (source, where) => SetSql.findOne({ where }),
  },
};
