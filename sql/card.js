// code
// language
// index
// name
// typeStr
// type
// superType
// subType
// power
// toughness
// loyalty
// mana
// rarity
// artist

export default function (sequelize, DataTypes) {
  return sequelize.define('card', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4(),
    },

    index: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      associate(/* models */) {},
    },
  });
}
