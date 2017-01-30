import fs from 'fs';
import config from 'config';
import dynamoose from 'dynamoose';

dynamoose.AWS.config.update({
  accessKeyId: config.get('aws.iam.key'),
  secretAccessKey: config.get('aws.iam.secret'),
  region: config.get('aws.region'),
});

const models = {};

fs.readdirSync(__dirname)
  .filter(filename => filename.substr(-3) === '.js' && filename !== 'index.js')
  .forEach((filename) => {
    const model = require(`./${filename}`); // eslint-disable-line global-require, import/no-dynamic-require
    const modelName = model.$__.name; // eslint-disable-line no-underscore-dangle

    models[modelName] = model;
  });

const Card = models.Card;
const Set = models.Set;

export {
  Card,
  Set,
};
