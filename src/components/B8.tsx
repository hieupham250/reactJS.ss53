import React from "react";

export default function B8() {
  function myFind(
    arr: number[],
    value: number,
    callback: (value: number, element: number) => boolean
  ): number | null {
    for (let i = 0; i < arr.length; i++) {
      if (callback(value, arr[i])) {
        return arr[i];
      }
    }
    return null;
  }

  function callback(value: number, element: number): boolean {
    return element === value;
  }

  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  const result1 = myFind(numbers, 2, callback);
  const result2 = myFind(numbers, 10, callback);
  console.log(result1);
  console.log(result2);

  return <div>B8</div>;
}
