import { Card } from '../../dynamo';

describe('DynamoDB', () => {
  describe('Card', () => {
    describe('Model', () => {
      it('should be the Card model', () => {
        expect(Card.$__.table.name).toBe('Card'); // eslint-disable-line no-underscore-dangle
        expect(Card.$__.name).toBe('Card'); // eslint-disable-line no-underscore-dangle
      });
    });

    describe('Instance', () => {
      const code = 'aaa';
      const language = 'en';
      const index = 1;
      const index2 = 2;

      const setId = [code, language].join('##');

      beforeEach(() => Card.create({ setId, index }));

      afterEach(() => Card.delete({ setId, index }));

      it('should not create a card with a setId and index already existing', () => Card.create({ setId, index })
        .then(() => { throw new Error('Condition should fail'); })
        .catch((err) => {
          expect(err).toBeDefined();
          expect(err.code).toBe('ConditionalCheckFailedException');
        }));

      it('should find the created card', () => Card.get({ setId, index })
        .then((card) => {
          expect(card).toBeDefined();
          expect(card).toBeInstanceOf(Card);
          expect(card.setId).toBe(setId);
          expect(card.code).toBe(code);
          expect(card.language).toBe(language);
          expect(card.index).toBe(index);
        }));

      it('should not find a card', () => Card.get({ setId, index: 2 })
        .then((card) => {
          expect(card).not.toBeDefined();
        }));

      it('should create a card with an existing set, but different index', () => Card.create({
        setId,
        index: index2,
      })
        .then((card) => {
          expect(card).toBeDefined();
          expect(card).toBeInstanceOf(Card);
          expect(card.setId).toBe(setId);
          expect(card.index).toBe(index2);

          return card.delete();
        }));
    });
  });
});
