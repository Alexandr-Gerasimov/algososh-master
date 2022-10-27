import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import styles from "./queue-page.module.css";
import { ElementStates } from "../../types/element-states";
import { Queue } from "../../utils/utils";
import { timeout } from "../../utils/utils";

const queue = new Queue(7)

export const QueuePage: React.FC = () => {
  const [value, setValue] = React.useState("");
  const inNewArr: string[] = Array.from({length: 7})
  const [newArr, setNewArr] = React.useState(inNewArr)
  const [isLoadind, setIsLoadind] = React.useState(false);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const enqueue = async () => {
    queue.enqueue(value, setNewArr)
    setValue("");
    setIsLoadind(true);
    await timeout(500);
    setIsLoadind(false);
  }

  const dequeue = async () => {
    setIsLoadind(true);
    await timeout(500);
    queue.dequeue(setNewArr);
    setIsLoadind(false);
  };

  return (
    <SolutionLayout title="Очередь">
      <div className={styles.input}>
        <Input
          onChange={onChange}
          isLimitText={true}
          maxLength={4}
          max={4}
          type="text"
        ></Input>
        <Button
        onClick={() => enqueue()}
              extraClass="ml-12"
              text="Добавить"
            ></Button>
        <Button
        onClick={() => dequeue()}
              extraClass="ml-12"
              text="Удалить"
            ></Button>
            <Button
              extraClass="ml-40"
              text="Очистить"
            ></Button>
      </div>
      <ul className="ul">
        {newArr.map((obj, id) => {
          return (
            <div className={styles.circle} key={id}>
              <Circle
                key={id}
                letter={obj}
                state={
                  isLoadind && id === newArr.length - 1
                    ? ElementStates.Changing
                    : ElementStates.Default
                }
              ></Circle>
              <p>{id}</p>
            </div>)
        })}
      </ul>
    </SolutionLayout>
  );
};
