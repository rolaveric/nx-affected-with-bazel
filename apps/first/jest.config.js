module.exports = {
  name: 'first',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/first',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
