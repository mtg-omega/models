import dynamoose from 'dynamoose';

const cardSchema = new dynamoose.Schema({
  setId: {
    type: String,
    hashKey: true,
    validate: setId => setId.split('##').length === 2,
  },

  index: {
    type: Number,
    rangeKey: true,
  },
});

cardSchema.virtual('code').get(() => this.setId.split('##')[0]);
cardSchema.virtual('language').get(() => this.setId.split('##')[1]);

module.exports = dynamoose.model('Card', cardSchema);
