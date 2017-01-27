import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import { Set as SetSql } from '../sql';

const Set = new GraphQLObjectType({
  name: 'set',
  description: 'A set of cards',
  fields: () => ({
    code: { type: GraphQLString },
    language: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

module.exports = {
  sets: {
    type: new GraphQLList(Set),
    args: {
      code: { type: GraphQLString },
      language: { type: GraphQLString },
    },
    resolve: (source, where) => SetSql.findAll({ where }),
  },

  set: {
    type: Set,
    args: {
      code: { type: new GraphQLNonNull(GraphQLString) },
      language: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (source, where) => SetSql.findOne({ where }),
  },
};
