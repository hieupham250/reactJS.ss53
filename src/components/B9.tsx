import React from "react";

export default function B9() {
  function myFilter(
    arr: number[],
    value: number,
    callback: Function
  ): number[] {
    let arrNew: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(value, arr[i])) {
        arrNew.push(arr[i]);
      }
    }
    return arrNew;
  }

  function callback(value: number, element: number): boolean {
    return element === value;
  }

  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  const result1 = myFilter(numbers, 2, callback);
  const result2 = myFilter(numbers, 10, callback);
  console.log(result1);
  console.log(result2);
  return <div>B9</div>;
}
