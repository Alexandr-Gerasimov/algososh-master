import React from "react";
import { Button } from "../ui/button/button";
import { RadioInput } from "../ui/radio-input/radio-input";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Column } from "../ui/column/column";
import { ElementStates } from "../../types/element-states";
import { timeout, swap } from "../../utils/utils";
import styles from "./sorting-page.module.css";
import { type } from "os";

type TArr = {
  obj: number;
  color: ElementStates;
};

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

  const bubbleSort = async (arr: TArr[], sort: "acending" | "decending") => {
    if (radioType === "bubble" && sort === "decending") {
      for (let i = 0; i < arr.length; i++) {
        for (let q = 0; q < arr.length - i - 1; q++) {
          arr[q].color = ElementStates.Changing;
          arr[q + 1].color = ElementStates.Changing;
          await timeout(500).then(() => {
            setNewArr([...arr]);
          });
          if (arr[q].obj < arr[q + 1].obj) {
            swap(arr, q, q + 1);
          }
          arr[q].color = ElementStates.Default;
          arr[q + 1].color = ElementStates.Default;
          if (q === arr.length - i - 2) {
            arr[q + 1].color = ElementStates.Modified;
          }
        }

        await timeout(500).then(() => {
          setNewArr([...arr]);
        });
      }
      arr.forEach((obj) => obj.color === ElementStates.Modified);
      return arr;
    }

    if (radioType === "bubble" && sort === "acending") {
      for (let i = 0; i < arr.length; i++) {
        for (let q = 0; q < arr.length - i - 1; q++) {
          arr[q].color = ElementStates.Changing;
          arr[q + 1].color = ElementStates.Changing;
          await timeout(500).then(() => {
            setNewArr([...arr]);
          });
          if (arr[q].obj > arr[q + 1].obj) {
            swap(arr, q, q + 1);
          }
          arr[q].color = ElementStates.Default;
          arr[q + 1].color = ElementStates.Default;
          if (q === arr.length - i - 2) {
            arr[q + 1].color = ElementStates.Modified;
          }
        }

        await timeout(500).then(() => {
          setNewArr([...arr]);
        });
      }
      arr.forEach((obj) => obj.color === ElementStates.Modified);
      return arr;
    }
  };

  const changeSort = async (arr: TArr[], sort: "acending" | "decending") => {
    if (radioType === "change" && sort === "decending") {
      for (let i = 0; i < arr.length - 1; i++) {
        let maxInd = i;

        await timeout(500).then(() => {
          setNewArr([...arr]);
        });
        for (let q = i + 1; q < arr.length; q++) {
          arr[maxInd].color = ElementStates.Changing;
          arr[q].color = ElementStates.Changing;
          await timeout(500).then(() => {
            setNewArr([...arr]);
          });
          if (arr[q].obj > arr[maxInd].obj) {
            arr[maxInd].color = ElementStates.Default;
            maxInd = q;
            arr[q].color = ElementStates.Changing;
          }
          await timeout(500).then(() => {
            setNewArr([...arr]);
          });
          arr[maxInd].color = ElementStates.Default;
          arr[q].color = ElementStates.Default;
        }
        swap(arr, i, maxInd);
        arr[i].color = ElementStates.Modified;
        await timeout(500).then(() => {
          setNewArr([...arr]);
        });
      }
    }

    if (radioType === "change" && sort === "acending") {
      for (let i = 0; i < arr.length - 1; i++) {
        let maxInd = i;

        await timeout(500).then(() => {
          setNewArr([...arr]);
        });
        for (let q = i + 1; q < arr.length; q++) {
          arr[maxInd].color = ElementStates.Changing;
          arr[q].color = ElementStates.Changing;
          await timeout(500).then(() => {
            setNewArr([...arr]);
          });
          if (arr[q].obj < arr[maxInd].obj) {
            arr[maxInd].color = ElementStates.Default;
            maxInd = q;
            arr[q].color = ElementStates.Changing;
          }
          await timeout(500).then(() => {
            setNewArr([...arr]);
          });
          arr[maxInd].color = ElementStates.Default;
          arr[q].color = ElementStates.Default;
        }
        swap(arr, i, maxInd);
        arr[i].color = ElementStates.Modified;
        await timeout(500).then(() => {
          setNewArr([...arr]);
        });
      }
    }
  };

  return (
    <SolutionLayout title="Сортировка массива">
      <div className={styles.head}>
        <RadioInput
          label="Выбор"
          onChange={() => setRadioType("change")}
          checked={radioType === "change"}
        ></RadioInput>
        <RadioInput
          label="Пузырёк"
          onChange={() => setRadioType("bubble")}
          checked={radioType === "bubble"}
        ></RadioInput>
        <Button
          text="По возрастанию"
          onClick={() =>
            radioType === "bubble"
              ? bubbleSort(newArr, "acending")
              : changeSort(newArr, "acending")
          }
        ></Button>
        <Button
          text="По убыванию"
          onClick={() =>
            radioType === "bubble"
              ? bubbleSort(newArr, "decending")
              : changeSort(newArr, "decending")
          }
        ></Button>
        <Button text="Новый массив" onClick={randomArr}></Button>
      </div>
      <div className={styles.column}>
        {newArr.map((obj, id) => {
          return (
            <Column
              index={obj.obj}
              state={obj.color}
              key={id}
              extraClass="ml-10"
            ></Column>
          );
        })}
      </div>
    </SolutionLayout>
  );
};
