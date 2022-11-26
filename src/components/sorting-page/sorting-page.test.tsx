import {
    render,
    fireEvent,
    waitFor,
  } from "@testing-library/react";
  import { BrowserRouter } from "react-router-dom";
  import { SortingPage } from "./sorting-page"
  
  jest.setTimeout(10000);
  describe("sorting", () => {
    it("с чётным количеством символов", async () => {
      const container = render(
        <BrowserRouter>
          <SortingPage />
        </BrowserRouter>
      );
      const array = container.getByTestId('column');
      const radio = container.getByTestId('change');
      const button = container.getByTestId('toHier');
      fireEvent.change(array, { textContent: "3412" });
      console.log(array.textContent) 
      fireEvent.click(radio);
      fireEvent.click(button);
  
      await waitFor(() =>
        expect(array.textContent).toEqual('1234'), {timeout: 5000}
      );
    });
  
  });
  