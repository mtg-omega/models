import { Card, Set } from '../../dynamo';

describe('DynamoDB', () => {
  describe('Models', () => {
    it('should be the Set model', () => {
      expect(Set.$__.table.name).toBe('Set'); // eslint-disable-line no-underscore-dangle
      expect(Set.$__.name).toBe('Set'); // eslint-disable-line no-underscore-dangle
    });

    it('should be the Set model', () => {
      expect(Card.$__.table.name).toBe('Card'); // eslint-disable-line no-underscore-dangle
      expect(Card.$__.name).toBe('Card'); // eslint-disable-line no-underscore-dangle
    });
  });
});
