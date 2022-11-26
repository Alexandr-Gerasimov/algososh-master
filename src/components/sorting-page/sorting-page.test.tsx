import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ElementStates } from "../../types/element-states";
import { SortingPage } from "./sorting-page";
import { bubbleSort, changeSort } from "./utils";

jest.setTimeout(10000);
describe("sorting", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SortingPage />
      </BrowserRouter>
    );
  });
  const arr = [
    { obj: 3, color: ElementStates.Default },
    { obj: 2, color: ElementStates.Default },
    { obj: 4, color: ElementStates.Default },
    { obj: 1, color: ElementStates.Default },
  ];

  const newArrToHeigth = [
    { obj: 1, color: ElementStates.Modified },
    { obj: 2, color: ElementStates.Modified },
    { obj: 3, color: ElementStates.Modified },
    { obj: 4, color: ElementStates.Modified },
  ];

  const newArrToLow = [
    { obj: 4, color: ElementStates.Modified },
    { obj: 3, color: ElementStates.Modified },
    { obj: 2, color: ElementStates.Modified },
    { obj: 1, color: ElementStates.Modified },
  ];

  const emptyArr: any[] = []

  const oneElement = [
    { obj: 1, color: ElementStates.Default }
  ]

  const oneElementModified = [
    { obj: 1, color: ElementStates.Modified }
  ]


  it("по возрастанию пузырек", async () => {
    expect(await bubbleSort(arr, "acending", "bubble")).toEqual(newArrToHeigth);
  });

  it("по возрастанию выбор", async () => {
    expect(await changeSort(arr, "acending", "change")).toEqual(newArrToHeigth);
  });

  it("по убыванию пузырек", async () => {
    expect(await bubbleSort(arr, "decending", "bubble")).toEqual(newArrToLow);
  });

  it("по убыванию выбор", async () => {
    expect(await changeSort(arr, "decending", "change")).toEqual(newArrToLow);
  });

  it("пустой по возрастанию пузырек", async () => {
    expect(await bubbleSort(emptyArr, "acending", "bubble")).toEqual(emptyArr);
  });

  it("пустой по возрастанию выбор", async () => {
    expect(await changeSort(emptyArr, "acending", "change")).toEqual(emptyArr);
  });

  it("пустой по убыванию пузырек", async () => {
    expect(await bubbleSort(emptyArr, "decending", "bubble")).toEqual(emptyArr);
  });

  it("пустой по убыванию выбор", async () => {
    expect(await changeSort(emptyArr, "decending", "change")).toEqual(emptyArr);
  });

  it("один по возрастанию пузырек", async () => {
    expect(await bubbleSort(oneElement, "acending", "bubble")).toEqual(oneElementModified);
  });

  it("один по возрастанию выбор", async () => {
    expect(await changeSort(oneElement, "acending", "change")).toEqual(oneElementModified);
  });

  it("один по убыванию пузырек", async () => {
    expect(await bubbleSort(oneElement, "decending", "bubble")).toEqual(oneElementModified);
  });

  it("один по убыванию выбор", async () => {
    expect(await changeSort(oneElement, "decending", "change")).toEqual(oneElementModified);
  });
});
