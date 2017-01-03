export default function (sequelize, DataTypes) {
  return sequelize.define('set', {
    Nname: DataTypes.TEXT,
    Ncode: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    Ncode_magiccards: DataTypes.TEXT,
    Ndate: DataTypes.TEXT,
    Nis_promo: DataTypes.TEXT,
    Nboosterpack_nM: DataTypes.TEXT,
    Nboosterpack_nR: DataTypes.TEXT,
    Nboosterpack_nU: DataTypes.TEXT,
    Nboosterpack_nC: DataTypes.TEXT,
    Nboosterpack_nE: DataTypes.TEXT,
    Nboosterpack_pM: DataTypes.TEXT,
    Nboosterpack_pR: DataTypes.TEXT,
    Nboosterpack_typeExtra1: DataTypes.TEXT,
    Nboosterpack_typeExtra2: DataTypes.TEXT,
    Nboosterpack_listExtra1: DataTypes.TEXT,
    Nboosterpack_listExtra2: DataTypes.TEXT,
    Nboosterpack_has_foil: DataTypes.TEXT,
    Nboosterpack_pF: DataTypes.TEXT,
  }, {
    tableName: 'MP_sets',
    timestamps: false,
    classMethods: {
      associate(/* models */) {},
    },
  });
}
