import { useContext, useEffect, useState } from "react";
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Lo siento...",
        text: "No tenemos suficiente stock de este producto",
      });
    }
  };
  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const reiniciar = () => {
    setCounter(0);
  };

  return (
    <div>
      <Counter
        cart={cart}
        counter={counter}
        sumar={sumar}
        restar={restar}
        reiniciar={reiniciar}
        onAdd={onAdd}
        navigate={navigate}
      />
    </div>
  );
};

export default CounterContainer;
