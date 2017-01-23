export default function (sequelize, DataTypes) {
  return sequelize.define('card', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    index: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate(models) {
        models.card.belongsTo(models.set);
      },
    },
  });
}
