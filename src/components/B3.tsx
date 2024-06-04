import React from "react";

export default function B3() {
  function processArray(arr: number[], callback: Function) {
    arr.forEach((num, index) => {
      setTimeout(() => {
        callback(num);
      }, index * 1000);
    });
  }
  function callback(num: number) {
    console.log(`Phần tử thứ: ${num}`);
  }
  processArray([1, 2, 3, 4, 5], callback);
  return <div>B3</div>;
}
