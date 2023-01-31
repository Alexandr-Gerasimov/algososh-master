import { ElementStates } from "../types/element-states";

export const timeout = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export type TArr = {
  obj: number;
  color: ElementStates;
};

export const swap = (
  arr: TArr[],
  firstIndex: number,
  secondIndex: number
): void => {
  [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
};
