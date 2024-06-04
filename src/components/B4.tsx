import React, { useEffect } from "react";

export default function B4() {
  function displayNumbers(callback: Function): void {
    let num = 1;
    setInterval(() => {
      callback(num);
      num++;
    }, 1000);
  }
  function callback(num: number) {
    console.log(`Số thứ tự: ${num}`);
  }
  displayNumbers(callback);

  return <div>B4</div>;
}
