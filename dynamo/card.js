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

function getSetIdPartFactory(part) {
  return function getSetIdPart() {
    return this.setId.split('##')[part];
  };
}

cardSchema.virtual('code').get(getSetIdPartFactory(0));
cardSchema.virtual('language').get(getSetIdPartFactory(1));

module.exports = dynamoose.model('Card', cardSchema);
