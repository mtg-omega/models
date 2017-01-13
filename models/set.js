export default function (sequelize, DataTypes) {
  return sequelize.define('set', {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },

    language: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate(/* models */) {},
    },
  });
}
