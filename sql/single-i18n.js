// type
// superType
// subType

export default function (sequelize, DataTypes) {
  return sequelize.define('single-i18n', {
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

    typeStr: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'singles-i18n',
    classMethods: {
      associate(models) {
        models['single-i18n'].belongsTo(models.single);
      },
    },
  });
}
