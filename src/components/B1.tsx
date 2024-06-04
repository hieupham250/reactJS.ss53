import React from "react";

export default function B1() {
  function calculate(a: number, b: number, callback: Function) {
    let result = a + b;
    callback(result);
  }
  function callback(result: number) {
    console.log(`Kết quả của phép tính: ${result}`);
  }
  calculate(3, 4, callback);

  return <div>B1</div>;
}
