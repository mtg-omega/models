import * as models from '../../sql/index';

describe('Index', () => {
  it('should export sequelize', () => {
    expect(models.sequelize).toBeDefined();
    expect(models.Sequelize).toBeDefined();
  });
});
