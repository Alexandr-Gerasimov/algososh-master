import renderer from "react-test-renderer";
import { Circle } from "./circle";
import { render, screen, fireEvent } from "@testing-library/react";
import { ElementStates} from "../../../types/element-states";

describe("Buttons", () => {
  it("Без букв", () => {
    const tree = renderer.create(<Circle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("С буквами", () => {
    const tree = renderer.create(<Circle letter={""}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("С head", () => {
    const tree = renderer.create(<Circle head={"Head"}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("C react-элементом в head", () => {
    const tree = renderer.create(<Circle head={"Head"} letter={""}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("С tail", () => {
    const tree = renderer.create(<Circle tail={"Tail"}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("C react-элементом в tail", () => {
    const tree = renderer.create(<Circle tail={"Tail"} letter={""}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("С index", () => {
    const tree = renderer.create(<Circle index={111}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("C пропом isSmall === true", () => {
    const tree = renderer.create(<Circle isSmall={true}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("В состоянии default", () => {
    const tree = renderer.create(<Circle state={ElementStates.Default}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("В состоянии changin", () => {
    const tree = renderer.create(<Circle state={ElementStates.Changing}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("В состоянии modified", () => {
    const tree = renderer.create(<Circle state={ElementStates.Modified}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});