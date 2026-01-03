import { useState } from "react";
import "./App.css";
export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("January 3 2026");
  date.setDate(date.getDate() + count);
  function handleMinus() {
    setStep((s) => (s > 1 ? s - 1 : s));
  }
  function handlePlus() {
    setStep((s) => s + 1);
  }
  // //////////////////////////////////////
  function handleCount() {
    setCount((c) => c + step);
  }
  function handleCo() {
    setCount((c) => c - step);
  }
  return (
    <div className="date-counter">
      <div className="box">
        <button className="btn" onClick={handleMinus}>
          -
        </button>
        <span className="digit">Step : {step}</span>
        <button className="btn" onClick={handlePlus}>
          +
        </button>
      </div>
      <div className="box">
        <button className="btn" onClick={handleCo}>
          -
        </button>
        <span className="digit">Count : {count}</span>
        <button className="btn" onClick={handleCount}>
          +
        </button>
      </div>
      <p className="count-date">
        {count === 0
          ? "Today is "
          : count >= 1
          ? `${count} days after `
          : `${count} days ago `}
        {date.toDateString()}
      </p>
    </div>
  );
}
