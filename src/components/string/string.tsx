import React, { MouseEventHandler } from "react";
import "./string.modules.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { ElementStates } from "../../types/element-states";
import { timeout } from "../../utils/utils";
import { TArr } from "./utils"
import { swap } from "./utils";

const stringRotation = async (numbers: string) => {
  const nums = Array.from(numbers);
  console.log(numbers)
  let arr: TArr[] = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push({ obj: nums[i], color: ElementStates.Default });
  }
  let start = 0;
  let end = arr.length - 1;
  for (let i = start, q = end; i <= q; i++, q--) {
    swap(arr, i, q);
  }
  return arr;
};

export const StringComponent: React.FC = () => {
  const [reg, setValue] = React.useState<string>("");
  const arrInit: Array<TArr> = [];
  const [newArr, setNewArr] = React.useState(arrInit);
  const [isLoader, setIsLoader] = React.useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const numbers = Array.from(reg);

  const onClicked = async (numbers: string[]) => {
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
    }
    await timeout(100).then(() => {
      setNewArr([...arr]);
    });
    setIsLoader(false);
    return arr;
  };

  return (
    <SolutionLayout title="Строка">
      <div className="input">
        <Input
          onChange={onChange}
          value={reg}
          maxLength={11}
          max={11}
          isLimitText
          type="text"
        />
        {!reg.length || reg.length > 11 ? (
          <Button
            disabled
            onClick={(e) => onClicked(numbers)}
            extraClass="ml-12"
            text="Развернуть"
          />
        ) : (
          <Button
            onClick={(e) => onClicked(numbers)}
            isLoader={isLoader}
            extraClass="ml-12"
            text="Развернуть"
          />
        )}
      </div>
      <ul className="ul">
        {newArr.map((obj, id) => {
          return <Circle state={obj.color} key={id} letter={obj.obj} />;
        })}
      </ul>
    </SolutionLayout>
  );
};
