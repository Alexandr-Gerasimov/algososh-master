import renderer from "react-test-renderer";
import { stringRotation } from "./utils";
import { render, screen, fireEvent } from "@testing-library/react";

describe("string", () => {
  it("с чётным количеством символов", () => {
    expect(stringRotation('1234')).toEqual(['4', '3', '2', '1']);
  });

  it("с нечетным количеством символов", () => {
    expect(stringRotation('12345')).toEqual(['5', '4', '3', '2', '1']);
  });

  it("с одним символом", () => {
    expect(stringRotation('1')).toEqual(['1']);
  });

  it("пустую строку", () => {
    expect(stringRotation('')).toEqual([]);
  });
});