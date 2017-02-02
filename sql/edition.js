export default function (sequelize, DataTypes) {
  return sequelize.define('edition', {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate(models) {
        models.edition.hasMany(models['edition-i18n'], { as: 'i18n' });
        models.edition.hasMany(models.single);
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
