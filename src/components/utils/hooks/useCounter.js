import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("El contador no puede ser menor que cero");
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return { counter, increment, decrement, reset };
};

export default useCounter;
