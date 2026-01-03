import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setSteps] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  // const step = 1;
  function handleNext() {
    setSteps((c) => (c < 3 ? c + 1 : c));
  }
  function handlePrev() {
    setSteps((c) => (c > 1 ? c - 1 : c));
  }
  function handleBtn() {
    setisOpen(!isOpen);
  }
  return (
    <div>
      <button className="btnss" onClick={handleBtn}>
        ❌
      </button>
      {isOpen && (
        <div className="steps">
          <Steps stp={step} />
          <Text message={messages} step={step} />
          <Button btn={handlePrev} btns={handleNext} />
        </div>
      )}
    </div>
  );
}

function Steps({ stp }) {
  return (
    <div className="number">
      <div className={`num ${stp >= 1 ? "active" : ""}`}>1</div>
      <div className={`num ${stp >= 2 ? "active" : ""}`}>2</div>
      <div className={`num ${stp >= 3 ? "active" : ""}`}>3</div>
    </div>
  );
}
function Text({ message, step }) {
  return (
    <div className="text">
      Step : {step} {message[step - 1]}
    </div>
  );
}
function Button({ btn, btns }) {
  return (
    <div className="button">
      <button className="btn" onClick={btn}>
        prev
      </button>
      <button className="btn" onClick={btns}>
        next
      </button>
    </div>
  );
}
