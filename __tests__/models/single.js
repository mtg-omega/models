import { sequelize, Single } from '../../index';

describe('Single', () => {
  describe('Class', () => {
    it('should be a valid model', () => {
      expect(Single).toBeDefined();
      expect(Single.rawAttributes).toBeDefined();
    });

    it('should have all the attributes', () => {
      expect(Single.rawAttributes.Nid).toBeDefined();
      expect(Single.rawAttributes.Nname).toBeDefined();
      expect(Single.rawAttributes.Nset).toBeDefined();
      expect(Single.rawAttributes.Ntype).toBeDefined();
      expect(Single.rawAttributes.Nrarity).toBeDefined();
      expect(Single.rawAttributes.Nmanacost).toBeDefined();
      expect(Single.rawAttributes.Nconverted_manacost).toBeDefined();
      expect(Single.rawAttributes.Npower).toBeDefined();
      expect(Single.rawAttributes.Ntoughness).toBeDefined();
      expect(Single.rawAttributes.Nloyalty).toBeDefined();
      expect(Single.rawAttributes.Nability).toBeDefined();
      expect(Single.rawAttributes.Nflavor).toBeDefined();
      expect(Single.rawAttributes.Nvariation).toBeDefined();
      expect(Single.rawAttributes.Nartist).toBeDefined();
      expect(Single.rawAttributes.Nnumber).toBeDefined();
      expect(Single.rawAttributes.Nrating).toBeDefined();
      expect(Single.rawAttributes.Nruling).toBeDefined();
      expect(Single.rawAttributes.Ncolor).toBeDefined();
      expect(Single.rawAttributes.Ngenerated_mana).toBeDefined();
      expect(Single.rawAttributes.Npricing_low).toBeDefined();
      expect(Single.rawAttributes.Npricing_mid).toBeDefined();
      expect(Single.rawAttributes.Npricing_high).toBeDefined();
      expect(Single.rawAttributes.Nback_id).toBeDefined();
      expect(Single.rawAttributes.Nwatermark).toBeDefined();
      expect(Single.rawAttributes.Nprint_number).toBeDefined();
      expect(Single.rawAttributes.Nis_original).toBeDefined();
      expect(Single.rawAttributes.Nname_CN).toBeDefined();
      expect(Single.rawAttributes.Nname_TW).toBeDefined();
      expect(Single.rawAttributes.Nname_FR).toBeDefined();
      expect(Single.rawAttributes.Nname_DE).toBeDefined();
      expect(Single.rawAttributes.Nname_IT).toBeDefined();
      expect(Single.rawAttributes.Nname_JP).toBeDefined();
      expect(Single.rawAttributes.Nname_PT).toBeDefined();
      expect(Single.rawAttributes.Nname_RU).toBeDefined();
      expect(Single.rawAttributes.Nname_ES).toBeDefined();
      expect(Single.rawAttributes.Nname_KO).toBeDefined();
      expect(Single.rawAttributes.Ntype_CN).toBeDefined();
      expect(Single.rawAttributes.Ntype_TW).toBeDefined();
      expect(Single.rawAttributes.Ntype_FR).toBeDefined();
      expect(Single.rawAttributes.Ntype_DE).toBeDefined();
      expect(Single.rawAttributes.Ntype_IT).toBeDefined();
      expect(Single.rawAttributes.Ntype_JP).toBeDefined();
      expect(Single.rawAttributes.Ntype_PT).toBeDefined();
      expect(Single.rawAttributes.Ntype_RU).toBeDefined();
      expect(Single.rawAttributes.Ntype_ES).toBeDefined();
      expect(Single.rawAttributes.Ntype_KO).toBeDefined();
      expect(Single.rawAttributes.Nability_CN).toBeDefined();
      expect(Single.rawAttributes.Nability_TW).toBeDefined();
      expect(Single.rawAttributes.Nability_FR).toBeDefined();
      expect(Single.rawAttributes.Nability_DE).toBeDefined();
      expect(Single.rawAttributes.Nability_IT).toBeDefined();
      expect(Single.rawAttributes.Nability_JP).toBeDefined();
      expect(Single.rawAttributes.Nability_PT).toBeDefined();
      expect(Single.rawAttributes.Nability_RU).toBeDefined();
      expect(Single.rawAttributes.Nability_ES).toBeDefined();
      expect(Single.rawAttributes.Nability_KO).toBeDefined();
      expect(Single.rawAttributes.Nflavor_CN).toBeDefined();
      expect(Single.rawAttributes.Nflavor_TW).toBeDefined();
      expect(Single.rawAttributes.Nflavor_FR).toBeDefined();
      expect(Single.rawAttributes.Nflavor_DE).toBeDefined();
      expect(Single.rawAttributes.Nflavor_IT).toBeDefined();
      expect(Single.rawAttributes.Nflavor_JP).toBeDefined();
      expect(Single.rawAttributes.Nflavor_PT).toBeDefined();
      expect(Single.rawAttributes.Nflavor_RU).toBeDefined();
      expect(Single.rawAttributes.Nflavor_ES).toBeDefined();
      expect(Single.rawAttributes.Nflavor_KO).toBeDefined();
      expect(Single.rawAttributes.Nlegality_Block).toBeDefined();
      expect(Single.rawAttributes.Nlegality_Standard).toBeDefined();
      expect(Single.rawAttributes.Nlegality_Modern).toBeDefined();
      expect(Single.rawAttributes.Nlegality_Legacy).toBeDefined();
      expect(Single.rawAttributes.Nlegality_Vintage).toBeDefined();
      expect(Single.rawAttributes.Nlegality_Highlander).toBeDefined();
      expect(Single.rawAttributes.Nlegality_French_Commander).toBeDefined();
      expect(Single.rawAttributes.Nlegality_Tiny_Leaders_Commander).toBeDefined();
      expect(Single.rawAttributes.Nlegality_Commander).toBeDefined();
      expect(Single.rawAttributes.Nlegality_Peasant).toBeDefined();
      expect(Single.rawAttributes.Nlegality_Pauper).toBeDefined();
    });
  });

  describe('Instance', () => {
    beforeEach(() => sequelize.sync());

    it('should have a row', () => Single.findAll()
      .then(singles => expect(singles).toHaveLength(1)));

    it('should have the "Anathemancer" row', () => Single.findOne({ where: { Nname: { $like: 'Anathemancer' } } })
      .then(single => expect(single).not.toBeNull()));
  });
});
