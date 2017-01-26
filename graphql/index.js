import fs from 'fs';
import log from 'hotvenue-utils/utils/log';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';

const queryFields = {};

try {
  fs.readdirSync(__dirname)
    .filter(filename => filename.substr(-3) === '.js' && filename !== 'index.js')
    .forEach((filename) => {
      const tmpFields = require(`./${filename}`); // eslint-disable-line global-require, import/no-dynamic-require

      Object.assign(queryFields, tmpFields);
    });
} catch (err) {
  if (err.code === 'ENOENT') {
    log.db.warn('No "graphql" directory');
  } else {
    throw new Error(err);
  }
}

const Query = new GraphQLObjectType({
  name: 'MtgOmegaSchema',
  description: 'The root of the Mtg Omega schema',
  fields: queryFields,
});

const Schema = new GraphQLSchema({
  query: Query,
});

export default Schema;
