export default function (sequelize, DataTypes) {
  return sequelize.define('set', {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate(models) {
        models.set.hasMany(models['set-i18n'], { as: 'i18n' });
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
