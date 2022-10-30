import { ElementStates } from "../../types/element-states";

export type TArr = {
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
    console.log(item);
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
    return this.head - 1;
  };

  getTail = () => {
    return this.tail - 1;
  };

  isEmpty = () => this.length === 0;

  isFull = () => this.length === 7;
}
