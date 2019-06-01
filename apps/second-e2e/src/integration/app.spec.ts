import { getGreeting } from '../support/app.po';

describe('second', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to second!');
  });
});
