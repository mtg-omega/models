import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import { Set as SetSql, SetI18N } from '../sql';

const Set = new GraphQLObjectType({
  name: 'set',
  description: 'A set of cards',
  fields: () => ({
    code: { type: GraphQLString },
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
    resolve(source, { code, language }) {
      const query = {
        where: {},
        include: [],
      };

      if (code) {
        query.where.code = code;
      }

      if (language) {
        query.include.push({
          model: SetI18N,
          as: 'i18n',
          where: { language },
        });
      }

      return SetSql.findAll(query);
    },
  },

  set: {
    type: Set,
    args: {
      code: { type: new GraphQLNonNull(GraphQLString) },
      language: { type: GraphQLString },
    },
    resolve(source, { code, language }) {
      const query = {
        where: { code },
        include: [],
      };

      if (language) {
        query.include.push({
          model: SetI18N,
          as: 'i18n',
          where: { language },
        });
      }

      return SetSql.findOne(query);
    },
  },
};
