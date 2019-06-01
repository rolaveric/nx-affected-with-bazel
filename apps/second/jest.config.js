module.exports = {
  name: 'second',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/second',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
