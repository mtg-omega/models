export default function (sequelize, DataTypes) {
  return sequelize.define('set', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        contains: '##',
        notEmpty: true,
        len: [4],
      },
      get() {
        return [
          this.getDataValue('code'),
          this.getDataValue('language'),
        ].join('##');
      },
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

    hooks: {
      beforeValidate(set) {
        set.id = set.id; // eslint-disable-line no-param-reassign
      },
    },
  });
}
