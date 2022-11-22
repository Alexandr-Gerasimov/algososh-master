import renderer from "react-test-renderer";
import { stringRotation } from "./utils";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { StringComponent } from "./string";

jest.setTimeout(10000);
describe("string", () => {
  it("с чётным количеством символов", async () => {
    const container = render(
      <BrowserRouter>
        <StringComponent />
      </BrowserRouter>
    );
    const input = container.getByTestId('input');
    const button = container.getByTestId('button');
    fireEvent.change(input, { target: { value: "1234" } });
    fireEvent.click(button);

    await waitFor(() =>
      expect(container.getByTestId("circles").textContent).toBe('4321'), {timeout: 4000}
    );
  });

  it("с нечетным количеством символов", async () => {
    const container = render(
      <BrowserRouter>
        <StringComponent />
      </BrowserRouter>
    );
    const input = container.getByTestId('input');
    const button = container.getByTestId('button');
    fireEvent.change(input, { target: { value: "12345" } });
    fireEvent.click(button);

    await waitFor(() =>
      expect(container.getByTestId("circles").textContent).toBe("54321"), {timeout: 5000}
    );
  });

  it("с одним символом", async () => {
    const container = render(
      <BrowserRouter>
        <StringComponent />
      </BrowserRouter>
    );
    const input = container.getByTestId('input');
    const button = container.getByTestId('button');
    fireEvent.change(input, { target: { value: "1" } });
    fireEvent.click(button);

    await waitFor(() => expect(container.getByTestId("circles").textContent).toBe("1"), {timeout: 1000});
  });

  it("пустую строку", async () => {
    const container = render(
      <BrowserRouter>
        <StringComponent />
      </BrowserRouter>
    );
    const input = container.getByTestId('input');
    const button = container.getByTestId('button');
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(button);

    await waitFor(() => expect(container.getByTestId("circles").textContent).toBe(''), {timeout: 1000});
  });
});
