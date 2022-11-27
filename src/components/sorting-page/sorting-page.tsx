import React, { useEffect } from "react";
import { Button } from "../ui/button/button";
import { RadioInput } from "../ui/radio-input/radio-input";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Column } from "../ui/column/column";
import { ElementStates } from "../../types/element-states";
import { timeout, swap } from "../../utils/utils";
import styles from "./sorting-page.module.css";
import { TArr } from "../../utils/utils";
import { bubbleSort, changeSort } from "./utils";

export const SortingPage: React.FC = () => {
  const arrInit: TArr[] = [];
  const [newArr, setNewArr] = React.useState(arrInit);
  const [radioType, setRadioType] = React.useState("");

  function randomArr() {
    const generateArray = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    let arr: TArr[] = [];
    let arrLength = generateArray(3, 17);
    for (let i = 0; i < arrLength; i++) {
      arr.push({ obj: generateArray(0, 100), color: ElementStates.Default });
    }
    setNewArr([...arr]);
  }

  useEffect(() => {
    randomArr();
  }, []);

  const bubbleSortButton = async (newArr: TArr[], sort: "acending" | "decending", radioType: string, setNewArr: { (value: React.SetStateAction<TArr[]>): void; (value: React.SetStateAction<TArr[]>): void; }) => {
    console.log(newArr)
      await timeout(500);
      bubbleSort(newArr, sort, radioType, setNewArr);
      newArr.forEach((obj) => obj.color === ElementStates.Modified);
  };

  const changeSortButton = async (newArr: TArr[], sort: "acending" | "decending", radioType: string, setNewArr: { (value: React.SetStateAction<TArr[]>): void; (value: React.SetStateAction<TArr[]>): void; }) => {
      await timeout(500);
      changeSort(newArr, sort, radioType, setNewArr);
  };

  return (
    <SolutionLayout title="Сортировка массива">
      <div className={styles.head}>
        <RadioInput
          label="Выбор"
          onChange={() => setRadioType("change")}
          checked={radioType === "change"}
          data-testid="change"
        />
        <RadioInput
          label="Пузырёк"
          onChange={() => setRadioType("bubble")}
          checked={radioType === "bubble"}
          data-testid="bubble"
        />
        <Button
          text="По возрастанию"
          onClick={() =>
            radioType === "bubble"
              ? bubbleSortButton(newArr, "acending", radioType, setNewArr)
              : changeSortButton(newArr, "acending", radioType, setNewArr)
          }
          data-testid="toHier"
        />
        <Button
          text="По убыванию"
          onClick={() =>
            radioType === "bubble"
              ? bubbleSortButton(newArr,"decending", radioType, setNewArr)
              : changeSortButton(newArr, "decending", radioType, setNewArr)
          }
          data-testid="toLower"
        />
        <Button text="Новый массив" onClick={randomArr} />
      </div>
      <div className={styles.column} data-testid="column">
        {newArr.map((obj, id) => {
          return (
            <Column
              index={obj.obj}
              state={obj.color}
              key={id}
              extraClass="ml-10"
            />
          );
        })}
      </div>
    </SolutionLayout>
  );
};
