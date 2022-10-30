import React, { useEffect } from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import styles from "./list-page.module.css";
import { ElementStates } from "../../types/element-states";
import { ArrowIcon } from "../ui/icons/arrow-icon";
import { LinkedList } from "./utils";
import { getRandomFloat } from "./utils";
import { TArr } from "./utils";
import { timeout } from "../../utils/utils";

export const ListPage: React.FC = () => {
  const [value, setValue] = React.useState("");
  const [index, setIndex] = React.useState<number>(0);
  const inNewArr: TArr[] = Array.from({ length: 4 }, () => ({
    obj: String(getRandomFloat(0, 999)),
    color: ElementStates.Default,
    head: false,
    tail: false,
  }));
  const linkedList = new LinkedList<string>();
  const [newArr, setNewArr] = React.useState(inNewArr);
  const [isLoadindAdd, setIsLoadindAdd] = React.useState(false);
  const [isLoadind, setIsLoadind] = React.useState("");

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onIndexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setIndex(newValue);
  };

  const addHead = async () => {
    setIsLoadind("addHead");
    let listData = linkedList.listToData();
    let newList = newArr;
    await timeout(500);
    newList[0] = {
      ...newList[0],
      topCircle: true,
      smallName: value,
    };
    setNewArr([...newList]);
    await timeout(500);
    newList[0] = {
      ...newList[0],
      topCircle: false,
    };
    linkedList.addTail(value);
    listData = linkedList.listToData();
    for (let i = 0; i < listData.length; i++) {
      newList.unshift({
        obj: listData[i],
        color: ElementStates.Modified,
        head: true,
        tail: false,
      });
      setNewArr([...newList]);
      await timeout(500);
      newList.shift();
      newList.unshift({
        obj: listData[i],
        color: ElementStates.Default,
        head: true,
        tail: false,
      });
    }
    setNewArr([...newList]);
    setValue("");
    setIsLoadind("");
  };

  const addTail = async () => {
    setIsLoadind("addTail");
    let listData = linkedList.listToData();
    let newList = newArr;
    await timeout(500);
    newList[newList.length - 1] = {
      ...newList[0],
      bottomCircle: true,
      smallName: value,
    };
    setNewArr([...newList]);
    await timeout(500);
    newList[newList.length - 1] = {
      ...newList[0],
      bottomCircle: false,
    };
    linkedList.addTail(value);
    listData = linkedList.listToData();
    for (let i = 0; i < listData.length; i++) {
      newList.push({
        obj: listData[i],
        color: ElementStates.Modified,
        head: false,
        tail: true,
      });
      setNewArr([...newList]);
      await timeout(500);
      newList.pop();
      newList.push({
        obj: listData[i],
        color: ElementStates.Default,
        head: false,
        tail: true,
      });
    }
    await timeout(500);
    setNewArr([...newList]);
    setValue("");
    setIsLoadind("");
  };

  const deleteHead = async () => {
    setIsLoadind("deleteHead");
    let listData = linkedList.listToData();
    let newList = newArr;
    await timeout(500);
    newList[0] = {
      ...newList[0],
      topCircle: true,
      obj: null,
      smallName: newList[0].obj,
    };
    await timeout(500);
    setNewArr([...newList]);
    newList[0] = {
      ...newList[0],
      topCircle: false,
    };
    await timeout(500);
    newList.shift();
    setNewArr([...newList]);
    linkedList.deleteHead();
    listData = linkedList.listToData();
    for (let i = 0; i < listData.length; i++) {
      newList.push({
        obj: listData[i],
        color: ElementStates.Default,
        head: true,
        tail: false,
      });
    }
    await timeout(500);
    setNewArr([...newList]);
    setIsLoadind("");
  };

  const deleteTail = async () => {
    setIsLoadind("deleteTail");
    let listData = linkedList.listToData();
    let newList = newArr;
    await timeout(500);
    newList[newList.length - 1] = {
      ...newList[0],
      bottomCircle: true,
      obj: null,
      smallName: newList[newList.length - 1].obj,
    };
    await timeout(500);
    setNewArr([...newList]);
    await timeout(500);
    newList.pop();
    setNewArr([...newList]);
    linkedList.deleteTail();
    listData = linkedList.listToData();
    for (let i = 0; i < listData.length; i++) {
      newList.unshift({
        obj: listData[i],
        color: ElementStates.Default,
        head: true,
        tail: false,
      });
    }
    await timeout(500);
    setNewArr([...newList]);
    setIsLoadind("");
  };

  const addIndex = async () => {
    setIsLoadind("addIndex");
    let listData = linkedList.listToData();
    let newList = newArr;
    await timeout(500);
    for (let i = 0; i <= index; i++) {
      newList[i] = {
        ...newList[i],
        topCircle: true,
        smallName: value,
      };
      setNewArr([...newList]);
      await timeout(500);
      newList[i] = {
        ...newList[i],
        topCircle: false,
      };
      if (i < index) {
        newList[i] = {
          ...newList[i],
          obj: newList[i].obj,
          color: ElementStates.Changing,
        };
      }
      setNewArr([...newList]);
    }
    await timeout(500);
    newList.forEach((obj) => (obj.color = ElementStates.Default));
    linkedList.addIndex(value, index);
    listData = linkedList.listToData();

    setNewArr([...newList]);
    newArr.splice(index, 0, {
      obj: value,
      color: ElementStates.Modified,
      head: true,
      tail: true,
    });
    setNewArr([...newList]);
    await timeout(500);
    newList.forEach((obj) => (obj.color = ElementStates.Default));
    setNewArr([...newList]);
    setIsLoadind("");
    setValue("");
    setIndex(0);
  };

  const deleteIndex = async () => {
    setIsLoadind("deleteIndex");
    let listData = linkedList.listToData();
    let newList = newArr;
    setNewArr([...newList]);
    for (let i = 0; i < index; i++) {
      newList[i] = {
        ...newList[i],
        obj: newList[i].obj,
        color: ElementStates.Changing,
      };
      await timeout(500);
      setNewArr([...newList]);
    }

    newList[index] = {
      ...newList[index],
      bottomCircle: true,
      obj: "",
      smallName: newList[index].obj,
    };
    await timeout(500);
    newList[index] = {
      ...newList[index],
      topCircle: false,
    };
    setNewArr([...newList]);

    newList.forEach((obj) => (obj.color = ElementStates.Default));

    linkedList.deleteIndex(index);
    listData = linkedList.listToData();
    newArr.splice(index, 1);
    await timeout(500);
    setNewArr([...newList]);
    setIsLoadind("");
    setValue("");
    setIndex(0);
  };

  return (
    <SolutionLayout title="Связный список">
      <div className={styles.block}>
        <Input
          onChange={onValueChange}
          value={value}
          maxLength={4}
          max={4}
          type="text"
          isLimitText
          extraClass={styles.input}
        />
        <Button
          onClick={() => addHead()}
          extraClass={styles.topButton}
          text="Добавить в head"
          disabled={value === "" || isLoadind !== ""}
          isLoader={isLoadind === "addHead"}
        />
        <Button
          onClick={() => addTail()}
          extraClass={styles.topButton}
          text="Добавить в tail"
          disabled={value === "" || isLoadind !== ""}
          isLoader={isLoadind === "addTail"}
        />
        <Button
          onClick={() => deleteHead()}
          extraClass={styles.topButton}
          text="Удалить из head"
          disabled={newArr.length === 0 || isLoadind !== ""}
          isLoader={isLoadind === "deleteHead"}
        />
        <Button
          onClick={() => deleteTail()}
          extraClass={styles.topButton}
          text="Удалить из tail"
          disabled={newArr.length === 0 || isLoadind !== ""}
          isLoader={isLoadind === "deleteTail"}
        />
      </div>
      <div className={styles.block}>
        <Input
          onChange={onIndexChange}
          value={index}
          maxLength={4}
          max={newArr.length - 1}
          type="number"
          isLimitText
          extraClass={styles.input}
        />
        <Button
          onClick={() => addIndex()}
          extraClass={styles.button}
          text="Добавить по индексу"
          disabled={
            index === 0 ||
            value === "" ||
            isLoadind !== "" ||
            index > newArr.length - 1
          }
          isLoader={isLoadind === "addIndex"}
        />
        <Button
          onClick={() => deleteIndex()}
          extraClass={styles.button}
          text="Удалить по индексу"
          disabled={
            index === 0 ||
            value !== "" ||
            isLoadind !== "" ||
            index > newArr.length - 1
          }
          isLoader={isLoadind === "deleteIndex"}
        />
      </div>
      <ul className={styles.ul}>
        {newArr.map((obj, id) => {
          return (
            <div key={id} className={styles.list}>
              <div className={styles.circle}>
                {obj.topCircle && (
                  <Circle
                    isSmall={true}
                    state={ElementStates.Changing}
                    letter={obj.smallName}
                    extraClass={styles.smallTop}
                  />
                )}
                <Circle
                  extraClass={styles.mainCircle}
                  key={id}
                  letter={obj.obj}
                  state={obj.color}
                  index={id}
                  head={id === 0 && obj.topCircle !== true ? "Head" : ""}
                  tail={
                    id === newArr.length - 1 && obj.bottomCircle !== true
                      ? "Tail"
                      : ""
                  }
                />
                {obj.bottomCircle === true && (
                  <Circle
                    isSmall={true}
                    state={ElementStates.Changing}
                    letter={obj.smallName}
                    extraClass={styles.smallBottom}
                  />
                )}
              </div>
              {id !== newArr.length - 1 && (
                <div className={styles.arrow}>
                  <ArrowIcon />
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </SolutionLayout>
  );
};
