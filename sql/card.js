export default function (sequelize, DataTypes) {
  return sequelize.define('card', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        contains: '##',
        notEmpty: true,
        len: [7],
      },
      get() {
        return [
          this.getDataValue('code'),
          this.getDataValue('language'),
          this.getDataValue('index'),
        ].join('##');
      },
    },

    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    language: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },

    index: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
    },

    typeStr: {
      type: DataTypes.STRING,
    },

    type: {
      type: DataTypes.STRING,
    },

    superType: {
      type: DataTypes.STRING,
    },

    subType: {
      type: DataTypes.STRING,
    },

    power: {
      type: DataTypes.INTEGER,
    },

    toughness: {
      type: DataTypes.INTEGER,
    },

    loyalty: {
      type: DataTypes.INTEGER,
    },

    mana: {
      type: DataTypes.STRING,
    },

    rarity: {
      type: DataTypes.STRING,
    },

    artist: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate(models) {
        models.card.belongsTo(models.set);
      },
    },

    hooks: {
      beforeValidate(card) {
        if (card.setId) {
          card.code = card.setId.split('##')[0]; // eslint-disable-line no-param-reassign
          card.language = card.setId.split('##')[1]; // eslint-disable-line no-param-reassign
        } else if (card.code && card.language) {
          card.setId = `${card.code}##${card.language}`; // eslint-disable-line no-param-reassign
        }

        card.id = card.id; // eslint-disable-line no-param-reassign
      },
    },

    validate: {
      mustHaveSet() {
        if (!this.setId) {
          throw new Error('Every card must be part of a set');
        }
      },
    },
  });
}
