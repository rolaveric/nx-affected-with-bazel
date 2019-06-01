import { getGreeting } from '../support/app.po';

describe('first', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to first!');
  });
});
