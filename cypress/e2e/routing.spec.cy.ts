import { createYield } from "typescript"

describe('Routing', function() {
  it('Start page', function()  {
    cy.visit('http://localhost:3000/')
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