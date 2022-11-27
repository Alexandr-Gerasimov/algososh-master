import renderer from "react-test-renderer";
import { Button } from "./button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Buttons", () => {
  it("Кнопки с текстом", () => {
    const tree = renderer.create(<Button text="Развернуть" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Кнопки без текста", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Заблокированные кнопки", () => {
    const tree = renderer.create(<Button disabled={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Кнопки с индикацией загрузки", () => {
    const tree = renderer.create(<Button isLoader={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Button is working", () => {
  it("Вызов колбека при клике на кнопку", () => {
    window.alert = jest.fn();
    render(<Button text="Click" onClick={() => alert("Работает")} />);
    const button = screen.getByText("Click");
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith("Работает");
  });
});
