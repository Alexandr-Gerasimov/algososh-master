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

  push = (
    item: T,
    setNewArr: React.Dispatch<React.SetStateAction<T[]>>
  ): void => {
    this.container.push(item);
    setNewArr([...this.container]);
  };

  pop = (setNewArr: React.Dispatch<React.SetStateAction<T[]>>): void => {
    this.container.pop();
    setNewArr([...this.container]);
  };

  clear = (setNewArr: React.Dispatch<React.SetStateAction<T[]>>): void => {
    this.container = [];
    setNewArr([]);
  };

  peak = (): T | null => {
    return this.container[this.getSize() - 1];
  };

  getSize = () => this.container.length;
}

type TQueArr = {
  obj: string;
  color: ElementStates;
};

export class Queue {
  private container: string[] = [];
  private head = 0;
  private tail = 0;
  private readonly size: number = 0;
  private length: number = 0;

  constructor(size: number) {
    this.size = size;
    this.container = Array(size);
  }

  enqueue = (item: string) => {
    if (this.length >= this.size) {
      throw new Error("Maximum length exceeded");
    }
    console.log(item)
    this.container[this.tail] = item;
    this.tail++;
    this.length++;
  };

  dequeue = () => {
    if (this.isEmpty()) {
      throw new Error("No elements in the queue");
    }
    this.head++;
    this.length--;
  };
  clear = () => {
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  };

  getHead = () => {
    return this.head-1;
  }; 

  getTail = () => {
    return this.tail-1;
  }; 

  isEmpty = () => this.length === 0;
}
