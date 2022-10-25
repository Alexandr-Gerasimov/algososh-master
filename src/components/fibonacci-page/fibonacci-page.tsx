import React from "react";
import styles from "./fibonacci-page.module.css"
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { ElementStates } from "../../types/element-states";


export const FibonacciPage: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const arrInit: number[] = [];
  const [newArr, setNewArr] = React.useState(arrInit);
  const [isLoader, setIsLoader] = React.useState(false);
  const [numArr, setNumArr] = React.useState(arrInit);
  const [isLimitText, setIsLimitText] = React.useState(false);

  const timeout = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const fibIterative = async (n: number, isLoader: boolean) => {
    setIsLoader(true)
    const arr = [1,1];
    for (let i = 2; i <= n; i++) {
      await timeout(500).then(() => {
        setNewArr([...arr])})
        arr.push(arr[i - 1] + arr[i -2]);
      
    }
    await timeout(500).then(() => {
      setNewArr([...arr])})
    
    setIsLoader(false)
  } 

  const onClick = (e: any) => {
    e.preventDefault();
    fibIterative(value, isLoader);
  };

  const onChange = (e: any) => {
    if (e.target.value > 19) {
      setIsLimitText(true)
    }
    setValue(e.target.value);
  };

  return (
    <SolutionLayout title="Последовательность Фибоначчи">
     <div className="input">
        <Input onChange={onChange} maxLength={19} max={19} type="text" isLimitText={isLimitText}></Input>
          {isLimitText === true || value === 0 ? (<Button
            disabled
            isLoader={isLoader}
            onClick={onClick}
            extraClass="ml-12"
            text="Развернуть"
          ></Button>) : (<Button
          isLoader={isLoader}
          onClick={onClick}
          extraClass="ml-12"
          text="Развернуть"
        ></Button>)}
      </div>
      <ul className={styles.ul}>
        {newArr.map((obj, id) => {
          return (
            <div className={styles.circle}>
            <Circle state={ElementStates.Default} key={id} letter={obj}></Circle>
            <p>{id}</p>
            </div>);
        })}
      </ul>
    </SolutionLayout>
  );
};
