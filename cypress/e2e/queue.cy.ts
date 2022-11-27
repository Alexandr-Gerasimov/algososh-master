import {
  circles,
  circle,
  style,
  defaultStyle,
  chandingStyle,
  modifedStyle,
  head,
  tail,
  testUrl
} from "../../src/constants/e2e_const";

describe("Очередь", () => {
  it("загрузка страницы", () => {
    cy.visit(`${testUrl}/queue`);
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

    cy.get(circles).get(head).eq(0).should("contain", "Head");
    cy.get(circles).get(tail).eq(0).should("contain", "Tail");

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
      .should("have.css", "border", defaultStyle)
      .should("contain", "");

    cy.wait(1000);

    cy.get('input[type="text"]').type("1");
    cy.get("button").contains("Добавить").click();

    cy.get(circles)
      .get(circle)
      .eq(1)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "1");

    cy.wait(500);

    cy.get(circles)
      .get(circle)
      .eq(1)
      .find(style)
      .should("have.css", "border", defaultStyle);

    cy.get(circles).get(head).eq(1).should("contain", "Head");
    cy.get(circles).get(tail).eq(1).should("contain", "Tail");

    cy.get('input[type="text"]').type("12");
    cy.get("button").contains("Добавить").click();

    cy.get(circles)
      .get(circle)
      .eq(2)
      .find(style)
      .should("have.css", "border", chandingStyle)
      .should("contain", "12");

    cy.wait(500);

    cy.get(circles)
      .get(circle)
      .eq(2)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "12");

    cy.get(circles).get(head).eq(1).should("contain", "Head");
    cy.get(circles).get(tail).eq(2).should("contain", "Tail");

    cy.get('input[type="text"]').type("123");
    cy.get("button").contains("Добавить").click();

    cy.get(circles)
      .get(circle)
      .eq(3)
      .find(style)
      .should("have.css", "border", chandingStyle)
      .should("contain", "123");

    cy.wait(500);

    cy.get(circles)
      .get(circle)
      .eq(3)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "123");

    cy.get(circles).get(head).eq(1).should("contain", "Head");
    cy.get(circles).get(tail).eq(3).should("contain", "Tail");  

    cy.get('input[type="text"]').type("1234");
    cy.get("button").contains("Добавить").click();

    cy.get(circles)
      .get(circle)
      .eq(4)
      .find(style)
      .should("have.css", "border", chandingStyle)
      .should("contain", "1234");

    cy.wait(500);

    cy.get(circles)
      .get(circle)
      .eq(4)
      .find(style)
      .should("have.css", "border", defaultStyle)
      .should("contain", "1234");

    cy.get(circles).get(head).eq(1).should("contain", "Head");
    cy.get(circles).get(tail).eq(4).should("contain", "Tail");
  
    cy.get("button").contains("Очистить").click();
    cy.get(circles).should("contain", "");
  });
});
