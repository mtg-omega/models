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

export default function (sequelize/* , DataTypes */) {
  return sequelize.define('card', {}, {
    classMethods: {
      associate(/* models */) {},
    },
  });
}
