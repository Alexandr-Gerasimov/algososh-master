import { createYield } from "typescript";
import {
  circles,
  circle,
  style,
  defaultStyle,
  chandingStyle,
  modifedStyle,
  head,
  tail,
  letter
} from "../../src/constants/e2e_const";

describe("Список", () => {
  it("загрузка страницы", () => {
    cy.visit("http://localhost:3000/list");
  });

  it("Пустой массив", function () {
    cy.get("input").should("be.empty");
    cy.get("button").should("be.disabled").contains("Добавить в head");
    cy.get("button").should("be.disabled").contains("Добавить в tail");
    cy.get("button").should("be.disabled").contains("Добавить по индексу");
    cy.get("button").should("be.disabled").contains("Удалить по индексу");
  });

  it("Работа функции", function () {
    cy.get(circles).each(($obj: any) => {cy.wrap($obj).find(letter).should('be.not.empty')})

    cy.get(circles).get(head).eq(0).should("contain", "Head");
    cy.get(circles).get(tail).last().should("contain", "Tail");

    cy.get('input[type="text"]').type("1");
    cy.get("button").contains("Добавить в head").click();

    cy.get(circles)
      .get(circle)
      .eq(0)
      .find(style)
      .should("have.css", "border", modifedStyle)
      .should("contain", "1");

    cy.wait(500);

    cy.get(circles)
      .get(circle)
      .eq(0)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "1");

    cy.get(circles).get(head).eq(0).should("contain", "Head");
    cy.get(circles).get(tail).last().should("contain", "Tail");

    cy.get('input[type="text"]').type("12");
    cy.get("button").contains("Добавить в tail").click();

    cy.wait(1000);

    cy.get(circles)
      .get(circle)
      .last()
      .find(style)
      .should("have.css", "border", modifedStyle)
      .should("contain", "12");

    cy.wait(500);

    cy.get(circles)
      .get(circle)
      .last()
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "12");

    cy.get(circles).get(head).eq(0).should("contain", "Head");
    cy.get(circles).get(tail).last().should("contain", "Tail");

    cy.get('input[type="text"]').type("123");
    cy.get('input[type="number"]').type("2");
    cy.get("button").contains("Добавить по индексу").click();

    cy.wait(2000);

    cy.get(circles)
      .get(circle)
      .eq(2)
      .find(style)
      .should("have.css", "border", modifedStyle)
      .should("contain", "123");

    cy.wait(500);

    cy.get(circles)
      .get(circle)
      .eq(2)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "123");

    cy.get(circles).get(head).eq(0).should("contain", "Head");
    cy.get(circles).get(tail).last().should("contain", "Tail");

    cy.get("button").contains("Удалить из head").click();

    cy.get(circles)
      .get(circle)
      .eq(0)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "");

    cy.wait(500);

    cy.get(circles).get(head).eq(0).should("contain", "Head");
    cy.get(circles).get(tail).last().should("contain", "Tail");

    cy.wait(1500);

    cy.get("button").contains("Удалить из tail").click();

    cy.get(circles)
      .get(circle)
      .last()
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "");

    cy.wait(1000);

    cy.get(circles).get(head).eq(0).should("contain", "Head");
    cy.wait(1000);
    cy.get(circles).get(tail).last().should("contain", "Tail");

    cy.get('input[type="number"]').type("2");
    cy.get("button").contains("Удалить по индексу").click();

    cy.wait(2000);

    cy.get(circles)
      .get(circle)
      .eq(2)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "");

    cy.wait(500);

    cy.get(circles).get(head).eq(0).should("contain", "Head");
    cy.wait(1000);
    cy.get(circles).get(tail).last().should("contain", "Tail");

  });
});
