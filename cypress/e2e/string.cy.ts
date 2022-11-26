import {
  circles,
  circle,
  style,
  defaultStyle,
  chandingStyle,
  modifedStyle,
} from "../../src/constants/e2e_const";

describe("Строка", () => {
  it("загрузка страницы", () => {
    cy.visit("http://localhost:3000/recursion");
  });

  it("Пустой массив", function () {
    cy.get("input").should("be.empty");
    cy.get("button").should("be.disabled").contains("Развернуть");
  });

  it("Работа функции", function () {
    cy.get('input[type="text"]').type("12345");
    cy.get("button").contains("Развернуть").click();
    cy.get(circles)
      .get(circle)
      .eq(0)
      .find(style)
      .should("have.css", "border", chandingStyle)
      .should("contain", "1");
    cy.get(circles)
      .get(circle)
      .eq(1)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "2");
    cy.get(circles)
      .get(circle)
      .eq(2)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "3");
    cy.get(circles)
      .get(circle)
      .eq(3)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "4");
    cy.get(circles)
      .get(circle)
      .eq(4)
      .find(style)
      .should("have.css", "border", chandingStyle)
      .should("contain", "5");

    cy.wait(500);
    cy.get(circles)
      .get(circle)
      .eq(0)
      .find(style)
      .should("have.css", "border", modifedStyle)
      .should("contain", "5");
    cy.get(circles)
      .get(circle)
      .eq(1)
      .find(style)
      .should("have.css", "border", chandingStyle)
      .should("contain", "2");
    cy.get(circles)
      .get(circle)
      .eq(2)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "3");
    cy.get(circles)
      .get(circle)
      .eq(3)
      .find(style)
      .should("have.css", "border", chandingStyle)
      .should("contain", "4");
    cy.get(circles)
      .get(circle)
      .eq(4)
      .find(style)
      .should("have.css", "border", modifedStyle)
      .should("contain", "1");

    cy.wait(500);
    cy.get(circles)
      .get(circle)
      .eq(0)
      .find(style)
      .should("have.css", "border", modifedStyle)
      .should("contain", "5");
    cy.get(circles)
      .get(circle)
      .eq(1)
      .find(style)
      .should("have.css", "border", modifedStyle)
      .should("contain", "4");
    cy.get(circles)
      .get(circle)
      .eq(2)
      .find(style)
      .should("have.css", "border", chandingStyle)
      .should("contain", "3");
    cy.get(circles)
      .get(circle)
      .eq(3)
      .find(style)
      .should("have.css", "border", modifedStyle)
      .should("contain", "2");
    cy.get(circles)
      .get(circle)
      .eq(4)
      .find(style)
      .should("have.css", "border", modifedStyle)
      .should("contain", "1");

    cy.get(circles)
      .get(circle)
      .eq(2)
      .find(style)
      .should("have.css", "border", modifedStyle)
      .should("contain", "3");
  });
});
