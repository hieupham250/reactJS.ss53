import React from "react";

export default function B7() {
  function myForEach(arr: number[], callback: Function) {
    for (let i in arr) {
      callback(Number(i), arr[i], arr);
    }
  }
  function callback(index: number, element: number, arr: number[]) {
    console.log(`Vị trí: ${index}, Phần tử: ${element}, Mảng: [${arr}]`);
  }
  const myArray = [1, 2, 3, 4, 5, 6];

  myForEach(myArray, callback);
  return <div>B7</div>;
}
