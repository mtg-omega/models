import config from 'config';
import dynamoose from 'dynamoose';

dynamoose.AWS.config.update({
  accessKeyId: config.get('aws.iam.key'),
  secretAccessKey: config.get('aws.iam.secret'),
  region: config.get('aws.region'),
});

const Set = dynamoose.model('Set', {
  code: String,
  language: String,
});

const Card = dynamoose.model('Card', {
  code: String,
  language: String,
  index: Number,
});

export {
  Card,
  Set,
};
