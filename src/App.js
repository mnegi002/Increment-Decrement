import { useState } from "react";
import "./styles.css";

const App = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      alert("can't decrease below zero");
      setNumber(0);
    }
  };
  return (
    <>
      <div className="container">
        <h1>{number}</h1>
        <div className="but">
          <button onClick={increase}>Incre</button>
          <button onClick={decrease}>Decre</button>
        </div>
      </div>
    </>
  );
};
export default App;
