import { ElementStates } from "../../types/element-states";

export type TArr = {
  obj: string | null;
  color: ElementStates;
  head?: boolean;
  tail?: boolean;
  topCircle?: boolean;
  bottomCircle?: boolean;
  smallName?: string | null;
};

export function getRandomFloat(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
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
