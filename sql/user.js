import crypto from 'crypto';
import config from 'config';

export default function (sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4(),
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      set(password) {
        const salt = crypto
          .randomBytes(config.get('crypto.saltBytes'))
          .toString('hex');
        const key = crypto
          .pbkdf2Sync(password, salt, config.get('crypto.iterations'), config.get('crypto.hashBytes'), config.get('crypto.algorithm'))
          .toString('hex');

        this.setDataValue('password', salt + key);
      },
      get() { return null; },
    },
  }, {
    classMethods: {
      associate(/* models */) {},
    },

    instanceMethods: {
      validatePassword(password) {
        const combined = this.getDataValue('password');
        const salt = combined.substr(0, 32);
        const key = combined.substr(32);

        const key2validate = crypto
          .pbkdf2Sync(password, salt, config.get('crypto.iterations'), config.get('crypto.hashBytes'), config.get('crypto.algorithm'))
          .toString('hex');

        return key === key2validate;
      },
    },
  });
}
