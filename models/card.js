export default function (sequelize, DataTypes) {
  return sequelize.define('card', {
    index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    setCode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sets',
        key: 'code',
      },
    },

    language: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sets',
        key: 'language',
      },
    },
  }, {
    classMethods: {
      associate(/* models */) {},
    },
  });
}
