export default function (sequelize, DataTypes) {
  return sequelize.define('edition-i18n', {
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
    tableName: 'editions-i18n',
    classMethods: {
      associate(models) {
        models['edition-i18n'].belongsTo(models.edition);
      },
    },
  });
}
