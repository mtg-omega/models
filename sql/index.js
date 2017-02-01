import fs from 'fs';
import path from 'path';
import config from 'config';
import Sequelize from 'sequelize';
import log from 'hotvenue-utils/utils/log';

const sequelize = new Sequelize(
  config.has('database.database') ? config.get('database.database') : null,
  config.has('database.username') ? config.get('database.username') : null,
  config.has('database.password') ? config.get('database.password') : null,
  {
    ...config.get('database'),
    logging: config.get('database.logging') ? log.db.debug : false,
  },
);

const models = {};

fs.readdirSync(__dirname)
  .filter(filename => filename.substr(-3) === '.js' && filename !== 'index.js')
  .forEach((filename) => {
    const model = sequelize.import(path.join(__dirname, filename));

    models[model.name] = model;
  });

Object.keys(models)
  .filter(modelName => modelName.substr(0, 1) !== '_' && 'associate' in models[modelName])
  .forEach(modelName => models[modelName].associate(models));

const Card = models.card;
const Set = models.set;
const SetI18N = models['set-i18n'];
const CardI18N = models['card-i18n'];

export {
  Sequelize,
  sequelize,

  Card,
  CardI18N,
  Set,
  SetI18N,
};
