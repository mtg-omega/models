export default function (sequelize, DataTypes) {
  return sequelize.define('set-i18n', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4(),
    },

    language: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'sets-i18n',
    classMethods: {
      associate(models) {
        models['set-i18n'].belongsTo(models.set);
      },
    },
  });
}
