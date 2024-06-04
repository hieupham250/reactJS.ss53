import React from "react";

export default function B5() {
  function checkCondition(condition: boolean, callback: Function): void {
    setTimeout(() => {
      callback(condition);
    }, 1000);
  }
  function display(result: boolean) {
    console.log(`Kết quả của điều kiện: ${result}`);
  }
  checkCondition(true, display);
  checkCondition(false, display);
  return <div>B5</div>;
}
