import { getGreeting } from '../support/app.po';

describe('nx-affected-with-bazel', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to nx-affected-with-bazel!');
  });
});
