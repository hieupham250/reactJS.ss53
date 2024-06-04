import React from "react";

export default function B6() {
  function task1() {
    setTimeout(() => {
      console.log("task1 được thự thi");
    }, 1000);
  }
  function task2() {
    setTimeout(() => {
      console.log("task2 được thự thi");
    }, 1500);
  }
  function task3() {
    setTimeout(() => {
      console.log("task3 được thự thi! hoàn thành");
    }, 2000);
  }
  task1();
  task2();
  task3();
  return <div>B6</div>;
}
