module.exports = {
  version: require('../package.json').version,
  abbreviate: require('./func/abbreviate.js'),
  durationTime: require('./func/durationTime.js'),
  unabbreviate: require('./func/unabbreviate.js')
};