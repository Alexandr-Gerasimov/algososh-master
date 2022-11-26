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
    cy.visit("http://localhost:3000/stack");
  });

  it("Пустой массив", function () {
    cy.get("input").should("be.empty");
    cy.get("button").should("be.disabled").contains("Добавить");
  });

  it("Работа функции", function () {
    cy.get('input[type="text"]').type("1");
    cy.get("button").contains("Добавить").click();
    cy.get(circles)
      .get(circle)
      .eq(0)
      .find(style)
      .should("have.css", "border", chandingStyle)
      .should("contain", "1");
    cy.wait(500);
    cy.get(circles)
      .get(circle)
      .eq(0)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "1");

      cy.get('input[type="text"]').type("1");
    cy.get("button").contains("Удалить").click();
    cy.get(circles)
      .get(circle)
      .eq(0)
      .find(style)
      .should("have.css", "border", chandingStyle)
      .should("contain", "1");
    cy.get(circles)
      .get(circle)
      .eq(0)
      .find(style)
      .should("contain", "");
    cy.get('input[type="text"]').type("1");
    cy.get("button").contains("Добавить").click();
    cy.get(circles)
      .get(circle)
      .eq(0)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "1");
    cy.wait(500);
    cy.get(circles)
      .get(circle)
      .eq(0)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "1");
    cy.get('input[type="text"]').type("12");
    cy.get("button").contains("Добавить").click();
    cy.get(circles)
      .get(circle)
      .eq(1)
      .find(style)
      .should("have.css", "border", chandingStyle)
      .should("contain", "12");
    cy.wait(500);
    cy.get(circles)
      .get(circle)
      .eq(1)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "12");
    cy.get('input[type="text"]').type("123");
    cy.get("button").contains("Добавить").click();
    cy.get(circles)
      .get(circle)
      .eq(2)
      .find(style)
      .should("have.css", "border", chandingStyle)
      .should("contain", "123");
    cy.wait(500);
    cy.get(circles)
      .get(circle)
      .eq(2)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "123");
    cy.get('input[type="text"]').type("1234");
    cy.get("button").contains("Добавить").click();
    cy.get(circles)
      .get(circle)
      .eq(3)
      .find(style)
      .should("have.css", "border", chandingStyle)
      .should("contain", "1234");
    cy.wait(500);
    cy.get(circles)
      .get(circle)
      .eq(3)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "1234");

    cy.get("button").contains("Очистить").click();
    cy.get(circles)
      .should("contain", "");
  });
});
