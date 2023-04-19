import { useState } from "react";
import { Button } from "reactstrap";
import "./counter.css";

const Counter = () => {
  const [number, setNumber] = useState(0);

  function increaseNumber(num) {
    setNumber(num + 1);
  }

  function decreaseNumber(num) {
    setNumber(num - 1);
  }

  return (
    <div className="counter">
      <h2 className="h-2">{number}</h2>
      <div className="buttons">
        <Button
          className="button-1"
          color="success"
          outline
          onClick={() => increaseNumber(number)}
        >
          Increase by 1
        </Button>
        <Button
          color="danger"
          outline
          onClick={() => decreaseNumber(number)}
        >
          Decrease by 1
        </Button>
      </div>
    </div>
  );
};

export default Counter;
