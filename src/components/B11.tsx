import React from "react";

export default function B11() {
  function myMap(
    arr: number[],

    callback: Function
  ): number[] {
    let arrNew: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      arrNew.push(callback(arr[i]));
    }
    return arrNew;
  }

  function callback(element: number): number {
    return element * 2;
  }

  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  const result1 = myMap(numbers, callback);
  console.log(result1);
  return <div>B11</div>;
}
