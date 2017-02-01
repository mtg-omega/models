// code
// language
// name

export default function (sequelize, DataTypes) {
  return sequelize.define('set', {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate(/* models */) {},
    },
  });
}
