export default function (sequelize, DataTypes) {
  return sequelize.define('feed', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4(),
    },

    title: {
      type: DataTypes.STRING,
    },

    description: {
      type: DataTypes.STRING,
    },

    link: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },

    url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },

    mostRecentUpdateAt: {
      type: DataTypes.DATE,
    },

    publishedAt: {
      type: DataTypes.DATE,
    },

    author: {
      type: DataTypes.STRING,
    },

    language: {
      type: DataTypes.STRING,
    },

    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },

    favicon: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },

    copyright: {
      type: DataTypes.STRING,
    },

    generator: {
      type: DataTypes.STRING,
    },

    categories: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate(models) {
        models.feed.hasMany(models.article);
      },
    },
  });
}
