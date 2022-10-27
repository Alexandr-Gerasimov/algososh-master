import { ElementStates } from "../types/element-states";

export const timeout = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

type TArr = {
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

export class Stack<T> {
  private container: T[] = [];

  push = (item: T, setNewArr: React.Dispatch<React.SetStateAction<T[]>>): void => {
    this.container.push(item);
    setNewArr([...this.container])
  };

  pop = (setNewArr: React.Dispatch<React.SetStateAction<T[]>>): void => {
    this.container.pop();
    setNewArr([...this.container])
  };

  clear = (setNewArr: React.Dispatch<React.SetStateAction<T[]>>): void => {
    this.container = [];
    setNewArr([])
  };

  peak = (): T | null => {
    return this.container[this.getSize() - 1];
  };

  getSize = () => this.container.length;
}