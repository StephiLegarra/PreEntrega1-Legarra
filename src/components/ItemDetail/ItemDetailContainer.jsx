import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "../../productsMock";
import useCounter from "../utils/hooks/useCounter";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { Block } from "@mui/icons-material";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { counter, increment, decrement, reset } = useCounter();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    let encontrado = productos.find((prod) => prod.id === +id);
    setTimeout(() => {
      setProduct(encontrado);
    }, 500);
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
      <h2 style={{ display: "block", margin: 20 }}>unidades: {counter}</h2>
      <div
        style={{
          display: "block",
          marginBottom: "10px",
        }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={increment}
          style={{
            backgroundColor: "yellow",
            color: "black",
            marginRight: "10px",
          }}
        >
          +
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={decrement}
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          -
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          size="small"
          style={{
            color: "red",
            margin: "10px",
            border: "1px solid red",
          }}
          onClick={reset}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          size="medium"
          style={{
            backgroundColor: "yellow",
            color: "black",
            margin: "10px",
          }}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
