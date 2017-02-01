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
  return sequelize.define('single', {
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
      associate(models) {
        models.single.hasMany(models['single-i18n'], { as: 'i18n' });
      },
    },

    instanceMethods: {
      getName(language) {
        if (this.i18n) {
          const i18n = this.i18n.find(i18nTmp => i18nTmp.language === language);

          if (i18n) {
            return i18n.name;
          }
        }

        return null;
      },
    },
  });
}
