import React from "react";

export default function B2() {
  function delayedCallback(callback: Function, delay: number): void {
    setTimeout(() => {
      callback();
    }, delay);
  }
  function callback() {
    console.log("Callback function được gọi sau 2 giây");
  }
  delayedCallback(callback, 2000);
  return <div>B2</div>;
}
