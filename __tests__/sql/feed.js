import { sequelize, Feed } from '../../sql';

describe('Sql', () => {
  describe('Feed', () => {
    describe('Model', () => {
      it('should be a model', () => {
        expect(Feed.name).toBe('feed');
        expect(Feed.tableName).toBe('feeds');

        expect(Feed.attributes.id.primaryKey).toBe(true);
        expect(Feed.attributes.id.defaultValue).toBeDefined();

        [
          'title',
          'description',
          'link',
          'url',
          'mostRecentUpdateAt',
          'publishedAt',
          'author',
          'language',
          'image',
          'favicon',
          'copyright',
          'generator',
          'categories',
        ].forEach(field => expect(Feed.attributes[field].fieldName).toBe(field));

        expect(Feed.attributes.createdAt.allowNull).toBe(false);
        // eslint-disable-next-line no-underscore-dangle
        expect(Feed.attributes.createdAt._autoGenerated).toBe(true);

        expect(Feed.attributes.updatedAt.allowNull).toBe(false);
        // eslint-disable-next-line no-underscore-dangle
        expect(Feed.attributes.updatedAt._autoGenerated).toBe(true);

        expect(Feed._timestampAttributes.createdAt).toBe('createdAt'); // eslint-disable-line no-underscore-dangle
        expect(Feed._timestampAttributes.updatedAt).toBe('updatedAt'); // eslint-disable-line no-underscore-dangle

        expect(Feed.associations.articles).toBeDefined();
      });
    });

    describe('Instance', () => {
      beforeEach(() => sequelize.sync({ force: true }));

      const validUrl = 'https://www.google.com';
      const invalidUrl = 'aaa';

      describe('Validation', () => {
        ['link', 'url', 'image', 'favicon'].forEach((urlField) => {
          const validFields = { [urlField]: validUrl };
          const invalidFields = { [urlField]: invalidUrl };

          it(`"${urlField}" should be a valid URL`, () => Feed.create(validFields)
            .then(feed => expect(feed.id).toBeDefined())
            .then(() => Feed.create(invalidFields))
            .then(() => { throw new Error('Invalid test'); })
            .catch((err) => {
              expect(err).toBeDefined();
              expect(err.name).toBe('SequelizeValidationError');
              expect(err.errors[0].path).toBe(urlField);
            }));
        });
      });
    });
  });
});
