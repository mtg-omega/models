export default function (sequelize, DataTypes) {
  return sequelize.define('set', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    code: {
      type: DataTypes.STRING,
      allowNull: false,
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
    classMethods: {
      associate(models) {
        models.set.hasMany(models.card);
      },
    },
  });
}
