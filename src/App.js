import "./App.css";
import { useState } from "react";
import Button from "./Button";

export default function App() {
  const [total, settotal] = useState(0);
  const [noOfclick, setnoOfclick] = useState(0);

  const incr = (no) => {
    settotal(total + no);
    setnoOfclick(noOfclick + 1);
  };
  const reset = () => {
    settotal(0);
    setnoOfclick(0);
  };
  return (
    <div className="App">
      <h1 className="title">Click Game</h1>
      <div className="inTitle">
        Instraction:
        <p className="instraction">
          welcome you can click any of the 3 buttons out of 9 and if total goes
          greater than 10 you will win or you lose
        </p>
        <h1 className="total">Total:{total}</h1>
        {noOfclick <= 2 && (
          <>
            <div className="buttons">
              <Button incr={incr} count={2} />
              <Button incr={incr} count={5} />
              <Button incr={incr} count={1} />
              <Button incr={incr} count={3} />
              <Button incr={incr} count={2} />
              <Button incr={incr} count={4} />
              <Button incr={incr} count={1} />
              <Button incr={incr} count={3} />
              <Button incr={incr} count={5} />
            </div>
          </>
        )}
        {noOfclick > 2 ? (
          total > 10 ? (
            <p className="button">
              you won <button onClick={reset}>click here</button> to restart
            </p>
          ) : (
            <p className="button">
              you lose <button onClick={reset}>click here</button> to restart
            </p>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
