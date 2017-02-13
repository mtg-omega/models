export default function (sequelize, DataTypes) {
  return sequelize.define('article', {
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

    summary: {
      type: DataTypes.STRING,
    },

    link: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },

    originalLink: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },

    permalink: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },

    articleUpdatedAt: {
      type: DataTypes.DATE,
    },

    articlePublishedAt: {
      type: DataTypes.DATE,
    },

    author: {
      type: DataTypes.STRING,
    },

    guid: {
      type: DataTypes.STRING,
      unique: true,
    },

    comments: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },

    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },

    categories: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate(models) {
        models.article.belongsTo(models.feed);
      },
    },
  });
}
