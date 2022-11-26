import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import styles from "./queue-page.module.css";
import { ElementStates } from "../../types/element-states";
import { Queue } from "./utils";
import { timeout } from "../../utils/utils";
import { TArr } from "./utils";

const queue = new Queue(7);

export const QueuePage: React.FC = () => {
  const [value, setValue] = React.useState("");
  const inNewArr: TArr[] = Array.from({ length: 7 }, () => ({
    obj: "",
    color: ElementStates.Default,
    head: false,
    tail: false,
  }));
  const [newArr, setNewArr] = React.useState(inNewArr);
  const [isLoadindAdd, setIsLoadindAdd] = React.useState(false);
  const [isLoadindDel, setIsLoadindDel] = React.useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const enqueue = async () => {
    setIsLoadindAdd(true);
    queue.enqueue(value);
    setValue("");
    newArr[queue.getTail()].obj = value;
    newArr[queue.getTail()].color = ElementStates.Changing;
    await timeout(500);
    newArr[queue.getTail()].color = ElementStates.Default;
    setIsLoadindAdd(false);
    setValue("");
  };

  const dequeue = async () => {
    setIsLoadindDel(true);
    queue.dequeue();
    newArr[queue.getHead()].color = ElementStates.Changing;
    await timeout(500);
    newArr[queue.getHead()].color = ElementStates.Default;
    if (queue.getHead() > 0) {
      newArr[queue.getHead()].obj = "";
    }
    newArr[queue.getHead()].obj = value;
    setIsLoadindDel(false);
    setValue("")
  };

  const clear = async () => {
    queue.clear();
    setNewArr([...inNewArr]);
  };

  return (
    <SolutionLayout title="Очередь">
      <div className={styles.input}>
        <Input
          onChange={onChange}
          value={value}
          isLimitText={true}
          maxLength={4}
          max={4}
          type="text"
        />
        <Button
          onClick={() => enqueue()}
          extraClass="ml-12"
          text="Добавить"
          isLoader={isLoadindAdd === true}
          disabled={isLoadindDel === true || !value || queue.isFull()}
        />
        <Button
          onClick={() => dequeue()}
          extraClass="ml-12"
          text="Удалить"
          isLoader={isLoadindDel === true}
          disabled={isLoadindAdd === true || queue.isEmpty()}
        />
        <Button
          onClick={() => clear()}
          extraClass="ml-40"
          text="Очистить"
          disabled={isLoadindDel === true || isLoadindAdd === true || queue.isEmpty()}
        />
      </div>
      <ul className="ul" data-testid="circles">
        {newArr.map((obj, id) => {
          return (
            <div className={styles.circle} key={id}>
              <Circle
                extraClass="mb-10"
                key={id}
                letter={obj.obj}
                state={obj.color}
                head={
                  obj.obj !== "" && queue.getHead() + 1 === id ? "Head" : ""
                }
                tail={queue.getTail() === id ? "Tail" : ""}
              />
              <p>{id}</p>
            </div>
          );
        })}
      </ul>
    </SolutionLayout>
  );
};
