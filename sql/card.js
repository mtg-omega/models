export default function (sequelize, DataTypes) {
  return sequelize.define('card', {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sets',
        key: 'code',
      },
    },

    language: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sets',
        key: 'language',
      },
    },

    index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
  });
}
