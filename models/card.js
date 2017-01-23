export default function (sequelize, DataTypes) {
  return sequelize.define('card', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
  });
}
