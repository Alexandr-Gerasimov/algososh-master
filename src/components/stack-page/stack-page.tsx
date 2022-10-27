import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import styles from "./stack-page.module.css"
import { ElementStates } from "../../types/element-states";
import { Stack } from "../../utils/utils"
import { timeout } from "../../utils/utils";


const stack = new Stack<string>();

export const StackPage: React.FC = () => {
  const [value, setValue] = React.useState('');
  const [newArr, setNewArr] = React.useState<string[]>([]);
  const [isLoadind, setIsLoadind] = React.useState(false);

  const onChange = (e: any) => {
    setValue(e.target.value);
    
  };

  const push = async() => {
    stack.push(value, setNewArr)
    setValue('')
    setIsLoadind(true)
    await timeout(500)
    setIsLoadind(false)
  }

  const pop = async () => {
    setIsLoadind(true)
    await timeout(500)
    stack.pop(setNewArr)
    setIsLoadind(false)
  }

  const clear = () => {
    stack.clear(setNewArr)
  }

  return (
    <SolutionLayout title="Стек">
      <div className={styles.input}>
        <Input onChange={onChange} isLimitText={true} maxLength={4} max={4} type="text"></Input>
        {value === '' ? (<>
        <Button
            extraClass="ml-12"
            disabled
            text="Добавить"
            onClick={() => push()}
          ></Button>
          </>) : (<>
            <Button
                extraClass="ml-12"
                text="Добавить"
                onClick={() => push()}
              ></Button>
              </>)}
          {newArr.length ?
          (<>
          <Button
            extraClass="ml-12"
            text="Удалить"
            onClick={() => pop()}
          ></Button>
          <Button
          extraClass="ml-40"
            text="Очистить"
            onClick={() => clear()}
          ></Button>
          </>) : 
          (<>
          <Button
            extraClass="ml-12"
            disabled
            text="Удалить"
            onClick={() => pop()}
          ></Button>
          <Button
            disabled
            extraClass="ml-40"
            text="Очистить"
            onClick={() => clear()}
          ></Button>
          </>)}
      </div>
      <ul className="ul">
        {newArr.map((obj, id) => {
          return (
            <div className={styles.circle} key={id}>
            {id === newArr.length - 1 ? (<><p>Top</p></>) : (<><p> </p></>)}
            <Circle key={id} letter={obj} state={isLoadind && id === newArr.length - 1 ? ElementStates.Changing : ElementStates.Default}></Circle>
            <p>{id}</p>
            </div>);
        })}
      </ul>
    </SolutionLayout>
  );
};
