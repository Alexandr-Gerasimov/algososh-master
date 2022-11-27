import { testUrl } from '../../src/constants/e2e_const'

describe('Routing', function() {
  beforeEach(() => {
    cy.visit(testUrl)
  })

  it('String', function() {
    cy.get('a[href*="/recursion"]').click()
    cy.contains('Строка')
  })

  it('Fibonacci', function() {
    cy.get('a[href*="/fibonacci"]').click()
    cy.contains('Последовательность Фибоначчи')
  })

  it('Sorting', function() {
    cy.get('a[href*="/sorting"]').click()
    cy.contains('Сортировка массива')
  })

  it('Stack', function() {
    cy.get('a[href*="/stack"]').click()
    cy.contains('Стек')
  })

  it('Queue', function() {
    cy.get('a[href*="/queue"]').click()
    cy.contains('Очередь')
  })

  it('List', function() {
    cy.get('a[href*="/list"]').click()
    cy.contains('Связный список')
  })
})