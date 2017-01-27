import { graphql } from 'graphql';

import Schema from '../../graphql';
import { sequelize, Set } from '../../sql';

describe('GraphQL', () => {
  describe('Set', () => {
    it('should have the "set" type', () => graphql(Schema, '{ __type(name: "set") { name fields { name } } }')
      .then((result) => {
        expect(result.errors).not.toBeDefined();
        expect(result.data).toBeDefined();

        const type = result.data.__type; // eslint-disable-line no-underscore-dangle

        expect(type).toBeDefined();
        expect(type.name).toBe('set');
        expect(type.fields).toHaveLength(3);

        expect(type.fields).toContainEqual({ name: 'code' });
        expect(type.fields).toContainEqual({ name: 'language' });
        expect(type.fields).toContainEqual({ name: 'name' });
      }));
  });

  describe('Query', () => {
    const code = 'aaa';
    const language = 'en';
    const name = 'set a';

    beforeEach(() => sequelize.sync({ force: true })
      .then(() => Set.create({ code, language, name })));

    describe('Basic', () => {
      it('should return 1 set', () => graphql(Schema, '{ sets { code } }')
        .then(({ data, errors }) => {
          expect(data).toBeDefined();
          expect(errors).not.toBeDefined();

          const { sets } = data;
          expect(sets).toHaveLength(1);

          const set = sets[0];
          expect(set.code).toBe(code);
        }));

      it('should return 1 set', () => graphql(Schema, `{ sets(code: "${code}") { code } }`)
        .then(({ data, errors }) => {
          expect(data).toBeDefined();
          expect(errors).not.toBeDefined();

          const { sets } = data;
          expect(sets).toHaveLength(1);

          const set = sets[0];
          expect(set.code).toBe(code);
        }));

      it('should return no sets', () => graphql(Schema, '{ sets(code: "aaab") { code } }')
        .then(({ data, errors }) => {
          expect(data).toBeDefined();
          expect(errors).not.toBeDefined();

          const { sets } = data;
          expect(sets).toHaveLength(0);
        }));

      it('should return the set', () => graphql(Schema, `{ set(code: "${code}", language: "${language}") { code } }`)
        .then(({ data, errors }) => {
          expect(data).toBeDefined();
          expect(errors).not.toBeDefined();

          const { set } = data;
          expect(set.code).toBeDefined();
        }));
    });
  });
});
