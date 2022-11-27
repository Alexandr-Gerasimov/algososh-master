import {
  circles,
  circle,
  style,
  defaultStyle,
  chandingStyle,
  modifedStyle,
  testUrl
} from "../../src/constants/e2e_const";


describe("Фибоначчи", () => {
  it("загрузка страницы", () => {
    cy.visit(`${testUrl}/fibonacci`);
  });

  it("Пустой массив", function () {
    cy.get("input").should("be.empty");
    cy.get("button").should("be.disabled").contains("Рассчитать");
  });

  it("Работа функции", function () {
    cy.get('input[type="number"]').type("4");
    cy.get("button").contains("Рассчитать").click();
    cy.get(circles)
      .get(circle)
      .eq(0)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "1");
    cy.get(circles)
      .get(circle)
      .eq(1)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "1");
    cy.wait(500);
    cy.get(circles)
      .get(circle)
      .eq(2)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "2");
    cy.wait(500);
    cy.get(circles)
      .get(circle)
      .eq(3)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "3");
    cy.wait(500);
    cy.get(circles)
      .get(circle)
      .eq(4)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "5");
  });
});
