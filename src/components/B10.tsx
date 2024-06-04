import React from "react";

export default function B10() {
  function myFindIndex(
    arr: number[],
    value: number,
    callback: Function
  ): number {
    for (let i = 0; i < arr.length; i++) {
      if (callback(value, arr[i])) {
        return i;
      }
    }
    return -1;
  }

  function callback(value: number, element: number): boolean {
    return element === value;
  }

  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  const result1 = myFindIndex(numbers, 2, callback);
  const result2 = myFindIndex(numbers, 10, callback);
  console.log(result1);
  console.log(result2);
  return <div>B10</div>;
}
