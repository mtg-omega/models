import { sequelize, Set } from '../../index';

describe('Set', () => {
  describe('Class', () => {
    it('should be a valid model', () => {
      expect(Set).toBeDefined();
      expect(Set.rawAttributes).toBeDefined();
    });

    it('should have all the attributes', () => {
      expect(Set.rawAttributes.Nname).toBeDefined();
      expect(Set.rawAttributes.Ncode).toBeDefined();
      expect(Set.rawAttributes.Ncode_magiccards).toBeDefined();
      expect(Set.rawAttributes.Ndate).toBeDefined();
      expect(Set.rawAttributes.Nis_promo).toBeDefined();
      expect(Set.rawAttributes.Nboosterpack_nM).toBeDefined();
      expect(Set.rawAttributes.Nboosterpack_nR).toBeDefined();
      expect(Set.rawAttributes.Nboosterpack_nU).toBeDefined();
      expect(Set.rawAttributes.Nboosterpack_nC).toBeDefined();
      expect(Set.rawAttributes.Nboosterpack_nE).toBeDefined();
      expect(Set.rawAttributes.Nboosterpack_pM).toBeDefined();
      expect(Set.rawAttributes.Nboosterpack_pR).toBeDefined();
      expect(Set.rawAttributes.Nboosterpack_typeExtra1).toBeDefined();
      expect(Set.rawAttributes.Nboosterpack_typeExtra2).toBeDefined();
      expect(Set.rawAttributes.Nboosterpack_listExtra1).toBeDefined();
      expect(Set.rawAttributes.Nboosterpack_listExtra2).toBeDefined();
      expect(Set.rawAttributes.Nboosterpack_has_foil).toBeDefined();
      expect(Set.rawAttributes.Nboosterpack_pF).toBeDefined();
    });
  });

  describe('Instance', () => {
    beforeEach(() => sequelize.sync());

    it('should have a row', () => Set.findAll()
      .then(sets => expect(sets).toHaveLength(1)));

    it('should have the "ARB" row', () => Set.findOne({ where: { Ncode: { $like: 'ARB' } } })
      .then(set => expect(set).not.toBeNull()));
  });
});
