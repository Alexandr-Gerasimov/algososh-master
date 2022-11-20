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

export const stringRotation = (numbers: string) => {
  const swap = (
    arr: string[],
    firstIndex: number,
    secondIndex: number
  ): void => {
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  };
  let arr: string[] = [];
  for (let i = 0; i < numbers.length; i++) {
    arr.push(numbers[i]);
  }
  let start = 0;
  let end = arr.length - 1;
  for (let i = start, q = end; i <= q; i++, q--) {
    swap(arr, i, q);
  }
  return arr;
};
