import React from "react";
import styles from "./fibonacci-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { ElementStates } from "../../types/element-states";
import { timeout } from "../../utils/utils";

export const FibonacciPage: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const arrInit: number[] = [];
  const [newArr, setNewArr] = React.useState(arrInit);
  const [isLoader, setIsLoader] = React.useState(false);
  const [numArr, setNumArr] = React.useState(arrInit);
  const [isLimitText, setIsLimitText] = React.useState(false);

  const fibIterative = async (n: number, isLoader: boolean) => {
    setIsLoader(true);
    const arr = [1, 1];
    for (let i = 2; i <= n; i++) {
      await timeout(500).then(() => {
        setNewArr([...arr]);
      });
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    await timeout(500).then(() => {
      setNewArr([...arr]);
    });

    setIsLoader(false);
    setValue(0)
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue > 19) {
      setIsLimitText(true);
    }
    setValue(newValue);
  };

  return (
    <SolutionLayout title="Последовательность Фибоначчи">
      <div className="input">
        <Input
          onChange={onChange}
          value={value}
          maxLength={19}
          max={19}
          type="number"
          isLimitText
        />
        {!value || value > 19 ? (
          <Button
            disabled
            isLoader={isLoader}
            onClick={(e) => fibIterative(value, isLoader)}
            extraClass="ml-12"
            text="Рассчитать"
          />
        ) : (
          <Button
            isLoader={isLoader}
            onClick={(e) => fibIterative(value, isLoader)}
            extraClass="ml-12"
            text="Рассчитать"
          />
        )}
      </div>
      <ul className={styles.ul} data-testid="circles">
        {newArr.map((obj, id) => {
          return (
            <div className={styles.circle} key={id}>
              <Circle state={ElementStates.Default} key={id} letter={obj} />
              <p>{id}</p>
            </div>
          );
        })}
      </ul>
    </SolutionLayout>
  );
};
