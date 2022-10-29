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
}

class NodeList<T> {
  value: T;
  next: NodeList<T> | null = null;

  constructor(value: T, next: NodeList<T> | null) {
    this.value = value;
    this.next = next === undefined ? null : next;
  }
}

export class LinkedList<T> {
  private head: NodeList<T> | null;
  private tail: NodeList<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addHead(value: T) {
    const newList = new NodeList(value, null);
    if (!this.head) {
      this.head = newList;
    } else {
      newList.next = this.head;
      this.head = newList;
    }
  }

  addTail(value: T) {
    const newList = new NodeList(value, null);
    if (!this.head || !this.tail) {
      this.head = newList;
      this.tail = newList;
    } else {
      this.tail.next = newList;
      this.tail = newList;
    }
  }

  deleteHead() {
    if (this.head) {
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
      }
    }
  }

  deleteTail() {
    if (this.head) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        let nextList = this.head.next;
        let prev = this.head;
        while (nextList !== this.tail && nextList) {
          prev = nextList;
          nextList = nextList.next;
        }
        prev.next = null;
        this.tail = prev;
      }
    }
  }

  addIndex(value: T, index: number) {
    if (this.head) {
      const newList = new NodeList(value, null);
      if (index === 0) {
        newList.next = this.head;
        this.head = newList;
      } else {
        let curr: NodeList<T> | null = this.head;
        let currIndex = 0;
        let prev = this.head;
        while (currIndex < index) {
          if (curr) {
            currIndex++;
            prev = curr;
            curr = curr.next;
          }
        }
        newList.next = curr;
        if (prev) {
          prev.next = newList;
        }
      }
    }
  }

  deleteIndex(index: number) {
    if (this.head) {
      if (index === 0) {
        this.deleteHead();
      } else {
        let nextList = this.head.next;
        let prev = this.head;
        let i = index;
        while (nextList !== this.tail && nextList && i !== 1 && nextList) {
          i--;
          prev = nextList;
          nextList = nextList.next;
        }
        if (nextList) {
          prev.next = nextList.next;
        } else {
          prev.next = null;
        }
        this.tail = prev;
      }
    }
  }

  listToData() {
    const data: Array<T> = [];
    let node = this.head;

    while (node) {
      data.push(node.value);
      node = node.next;
    }
    return data;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}
