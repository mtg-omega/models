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

const Edition = models.edition;
const EditionI18N = models['edition-i18n'];
const Single = models.single;
const SingleI18N = models['single-i18n'];

const User = models.user;

export {
  Sequelize,
  sequelize,

  Edition,
  EditionI18N,
  Single,
  SingleI18N,

  User,
};
