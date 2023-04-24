import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "../../productsMock";
import useCounter from "../utils/hooks/useCounter";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { counter, increment, decrement, reset } = useCounter();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    let encontrado = productos.find((prod) => prod.id === +id);
    setTimeout(() => {
      setProduct(encontrado);
    }, 1000);
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
      <h2> {counter}</h2>
      <Button variant="contained" size="small" onClick={increment}>
        +
      </Button>
      <Button variant="contained" size="small" onClick={decrement}>
        -
      </Button>
      <Button variant="contained" size="small" onClick={reset}>
        Reset
      </Button>
    </div>
  );
};

export default ItemDetailContainer;
