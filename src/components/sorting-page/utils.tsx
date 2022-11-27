import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Button } from "../ui/button/button";
import { RadioInput } from "../ui/radio-input/radio-input";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Column } from "../ui/column/column";
import { ElementStates } from "../../types/element-states";
import { timeout, swap } from "../../utils/utils";
import styles from "./sorting-page.module.css";
import { TArr } from "../../utils/utils";

const arrInit: TArr[] = [];

export const bubbleSort = async (arr: TArr[], sort: "acending" | "decending", radioType: string, setNewArr?: Dispatch<SetStateAction<typeof arrInit>>) => {
    if (radioType === "bubble" && sort === "decending") {
        
      for (let i = 0; i < arr.length; i++) {
        for (let q = 0; q < arr.length - i - 1; q++) {
          arr[q].color = ElementStates.Changing;
          arr[q + 1].color = ElementStates.Changing;
          await timeout(500).then(() => {
            if(setNewArr)
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
        if(setNewArr)
          setNewArr([...arr]);
        });
        arr[0].color = ElementStates.Modified;
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
            if(setNewArr)
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
            if(setNewArr)
          setNewArr([...arr]);
        });
        arr[0].color = ElementStates.Modified;
      }
      
      arr.forEach((obj) => obj.color === ElementStates.Modified);
      return arr;
      
    }
  };

export const changeSort = async (arr: TArr[], sort: "acending" | "decending", radioType: string, setNewArr?: Dispatch<SetStateAction<typeof arrInit>>) => {
    if (radioType === "change" && sort === "decending") {
      for (let i = 0; i < arr.length - 1; i++) {
        let maxInd = i;
        await timeout(500).then(() => {
            if(setNewArr)
          setNewArr([...arr]);
        });
        for (let q = i + 1; q < arr.length; q++) {
          arr[maxInd].color = ElementStates.Changing;
          arr[q].color = ElementStates.Changing;
          await timeout(500).then(() => {
            if(setNewArr)
            setNewArr([...arr]);
          });
          if (arr[q].obj > arr[maxInd].obj) {
            arr[maxInd].color = ElementStates.Default;
            maxInd = q;
            arr[q].color = ElementStates.Changing;
          }
          await timeout(500).then(() => {
            if(setNewArr)
            setNewArr([...arr]);
          });
          arr[maxInd].color = ElementStates.Default;
          arr[q].color = ElementStates.Default;
        }
        swap(arr, i, maxInd);
        arr[i].color = ElementStates.Modified;
        await timeout(500).then(() => {
            if(setNewArr)
          setNewArr([...arr]);
        });
        arr[arr.length -1].color = ElementStates.Modified;
      }
      return arr;
    }

    if (radioType === "change" && sort === "acending") {
      for (let i = 0; i < arr.length - 1; i++) {
        let maxInd = i;
        await timeout(500).then(() => {
            if(setNewArr)
          setNewArr([...arr]);
        });
        for (let q = i + 1; q < arr.length; q++) {
          arr[maxInd].color = ElementStates.Changing;
          arr[q].color = ElementStates.Changing;
          await timeout(500).then(() => {
            if(setNewArr)
            setNewArr([...arr]);
          });
          if (arr[q].obj < arr[maxInd].obj) {
            arr[maxInd].color = ElementStates.Default;
            maxInd = q;
            arr[q].color = ElementStates.Changing;
          }
          await timeout(500).then(() => {
            if(setNewArr)
            setNewArr([...arr]);
          });
          arr[maxInd].color = ElementStates.Default;
          arr[q].color = ElementStates.Default;
        }
        swap(arr, i, maxInd);
        arr[i].color = ElementStates.Modified;
        await timeout(500).then(() => {
            if(setNewArr)
          setNewArr([...arr]);
        });
        
      }
      if(arr.length) {
      arr[arr.length -1].color = ElementStates.Modified;
      }
      return arr;
    }
  };