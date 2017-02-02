import {
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';

import {
  GraphQLUUID,
} from 'graphql-custom-types';


export const Single = new GraphQLObjectType({
  name: 'single',
  description: 'A single of an edition',
  fields: () => ({
    id: { type: GraphQLUUID },
  }),
});

export default {
  cards: {
    type: new GraphQLList(Single),
  },

  card: {
    type: Single,
  },
};
