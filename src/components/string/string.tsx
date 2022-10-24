import React from "react";
import "./string.modules.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { nanoid } from "nanoid";
import { ElementStates } from "../../types/element-states";
import { type } from "os";

type TArr = {
  obj: string;
  color: ElementStates;
};

export const StringComponent: React.FC = () => {
  const [reg, setValue] = React.useState([]);
  const arrInit: Array<TArr> = [];
  const [newArr, setNewArr] = React.useState(arrInit);
  const [isLoader, setIsLoader] = React.useState(false);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const numbers = Array.from(reg);
  const timeout = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const onClicked = async (numbers: string[], isLoader: boolean) => {
    setIsLoader(true);
    const swap = (
      arr: TArr[],
      firstIndex: number,
      secondIndex: number
    ): void => {
      const temp = arr[firstIndex];
      arr[firstIndex] = arr[secondIndex];
      arr[secondIndex] = temp;
    };
    let arr: TArr[] = [];
    for (let i = 0; i < numbers.length; i++) {
      arr.push({ obj: numbers[i], color: ElementStates.Default });
    }
    let start = 0;
    let end = arr.length - 1;
    for (let i = start, q = end; i <= q; i++, q--) {
      arr[i].color = ElementStates.Changing;
      arr[q].color = ElementStates.Changing;
      await timeout(1000).then(() => {
        setNewArr([...arr]);
      });
      swap(arr, i, q);
      arr[i].color = ElementStates.Modified;
      arr[q].color = ElementStates.Modified;
      console.log(arr[i], arr[q]);
    }
    await timeout(100).then(() => {
      setNewArr([...arr]);
    });
    setIsLoader(false);
    return arr;
  };

  const onClick = (e: any) => {
    e.preventDefault();
    onClicked(numbers, isLoader);
  };

  const numb = newArr;

  return (
    <SolutionLayout title="Строка">
      <div className="input">
        <Input onChange={onChange} maxLength={11} max={11} type="text"></Input>
        {!reg.length ? (
          <Button
            disabled
            onClick={onClick}
            extraClass="ml-12"
            text="Развернуть"
          ></Button>
        ) : (
          <Button
            onClick={onClick}
            isLoader={isLoader}
            extraClass="ml-12"
            text="Развернуть"
          ></Button>
        )}
      </div>
      <ul className="ul">
        {newArr.map((obj, id) => {
          return <Circle state={obj.color} key={id} letter={obj.obj}></Circle>;
        })}
      </ul>
    </SolutionLayout>
  );
};
