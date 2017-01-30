import { Set } from '../../dynamo';

describe('DynamoDB', () => {
  describe('Set', () => {
    describe('Model', () => {
      it('should be the Set model', () => {
        expect(Set.$__.table.name).toBe('Set'); // eslint-disable-line no-underscore-dangle
        expect(Set.$__.name).toBe('Set'); // eslint-disable-line no-underscore-dangle
      });
    });

    describe('Instance', () => {
      const code = 'aaa';
      const language = 'en';
      const language2 = 'it';

      let tmpSet;

      beforeEach(() => Set.create({ code, language })
        .then((set) => { tmpSet = set; })
        .catch(err => console.error(err)));

      afterEach(() => tmpSet.delete());

      it('should not create a set with an existing code', () => Set.create({ code, language })
        .then(() => { throw new Error('Condition should fail'); })
        .catch((err) => {
          expect(err).toBeDefined();
          expect(err.code).toBe('ConditionalCheckFailedException');
        }));

      it('should find the created set', () => Set.get({ code, language })
        .then((set) => {
          expect(set).toBeDefined();
          expect(set).toBeInstanceOf(Set);
          expect(set.code).toBe(code);
          expect(set.language).toBe(language);
        }));

      it('should not find a set', () => Set.get({ code, language: language2 })
        .then((set) => {
          expect(set).not.toBeDefined();
        }));
    });
  });
});
