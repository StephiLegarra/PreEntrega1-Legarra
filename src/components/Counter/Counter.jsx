import { Button } from "@mui/material";

const Counter = ({
  reiniciar,
  sumar,
  restar,
  counter,
  onAdd,
  navigate,
  cart,
}) => {
  return (
    <div>
      <h2 style={{ display: "block", margin: 20 }}>
        Unidades seleccionadas: {counter}
      </h2>
      <div
        style={{
          display: "block",
          marginBottom: "10px",
        }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={sumar}
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
          onClick={restar}
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          -
        </Button>
        <Button
          variant="outlined"
          size="small"
          style={{
            color: "red",
            margin: "10px",
            border: "1px solid red",
          }}
          onClick={reiniciar}
        >
          Reset
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          size="medium"
          style={{
            backgroundColor: "yellow",
            color: "black",
            margin: "10px",
          }}
          onClick={() => {
            onAdd(counter);
          }}
        >
          Agregar al carrito
        </Button>
        {cart.length === 0 ? null : (
          <Button
            variant="contained"
            size="medium"
            style={{
              backgroundColor: "yellow",
              color: "black",
              margin: "10px",
            }}
            onClick={() => navigate("/checkout")}
          >
            Terminar la compra
          </Button>
        )}
      </div>
    </div>
  );
};

export default Counter;
