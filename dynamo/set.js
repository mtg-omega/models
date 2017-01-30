import dynamoose from 'dynamoose';

const setSchema = new dynamoose.Schema({
  code: {
    type: String,
    hashKey: true,
  },

  language: {
    type: String,
    rangeKey: true,
  },
});

module.exports = dynamoose.model('Set', setSchema);
