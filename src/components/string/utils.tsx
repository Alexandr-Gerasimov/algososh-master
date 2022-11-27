import { ElementStates } from "../../types/element-states";

export type TArr = {
  obj: string;
  color: ElementStates;
};

export const swap = (
  arr: TArr[],
  firstIndex: number,
  secondIndex: number
): void => {
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};