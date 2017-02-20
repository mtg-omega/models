import * as models from '../src';

describe('Index', () => {
  it('should export sequelize', () => {
    expect(models.sequelize).toBeDefined();
    expect(models.Sequelize).toBeDefined();
  });
});
