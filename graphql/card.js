import {
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';

import {
  GraphQLUUID,
} from 'graphql-custom-types';


export const Card = new GraphQLObjectType({
  name: 'card',
  description: 'A card of a set',
  fields: () => ({
    id: { type: GraphQLUUID },
  }),
});

export default {
  cards: {
    type: new GraphQLList(Card),
  },

  card: {
    type: Card,
  },
};
