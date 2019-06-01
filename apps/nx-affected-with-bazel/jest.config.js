module.exports = {
  name: 'nx-affected-with-bazel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-affected-with-bazel',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
