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