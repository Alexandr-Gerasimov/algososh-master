import { testUrl } from '../../src/constants/e2e_const'

describe('empty spec', () => {
  it('passes', () => {
    cy.visit(testUrl);
    cy.contains('МБОУ АЛГОСОШ');
    
  })
})