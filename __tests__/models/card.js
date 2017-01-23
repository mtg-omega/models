import { sequelize, Card } from '../../index';

describe('Card', () => {
  describe('Class', () => {
    it('should be a valid model', () => {
      expect(Card).toBeDefined();
      expect(Card.rawAttributes).toBeDefined();
    });

    it('should have all the attributes', () => {
      expect(Card.rawAttributes.id).toBeDefined();
      expect(Card.rawAttributes.id.primaryKey).toBe(true);

      expect(Card.rawAttributes.index).toBeDefined();
      expect(Card.rawAttributes.index.allowNull).toBe(false);

      expect(Card.rawAttributes.createdAt).toBeDefined();
      // eslint-disable-next-line no-underscore-dangle
      expect(Card._timestampAttributes.createdAt).toBe('createdAt');

      expect(Card.rawAttributes.updatedAt).toBeDefined();
      // eslint-disable-next-line no-underscore-dangle
      expect(Card._timestampAttributes.updatedAt).toBe('updatedAt');
    });
  });

  describe('Instance', () => {
    const index = 4;

    beforeEach(() => sequelize.sync({ force: true })
      .then(() => Promise.all([
        Card.create({ index }),
      ])));

    it('should have 1 row', () => Card.findAll()
      .then(cards => expect(cards).toHaveLength(1)));

    it('should have the "4" row', () => Card.findOne({ where: { index } })
      .then((card) => {
        expect(card).toBeDefined();
        expect(card).toBeInstanceOf(Object);
        expect(card.index).toBe(index);
      }));

    describe('Validation', () => {
      it('should not create a row without the "index" field', () => Card.create({})
        .then(() => { throw new Error('This test should throw an exception'); })
        .catch((err) => {
          expect(err).toBeDefined();
          expect(err.name).toBe('SequelizeValidationError');
          expect(err.errors[0].path).toBe('index');
        }));
    });
  });
});
