import { Link } from "react-router-dom";
import styles from "./ItemDetail.module.css";
import CounterContainer from "../Counter/CounterContainer";
import { Button } from "@mui/material";

const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div className={styles.fondoItemDetail}>
      <div className={styles.containerItemDetail}>
        <img
          src={product.img}
          alt="Imagen de la prenda disponible para venta"
          width="500"
          height="500"
        />
        <h1> {product.title}</h1>
        <h2> ${product.price}</h2>
        <h4> {product.description}</h4>
      </div>

      {product.stock > 0 ? (
        <div>
          <CounterContainer
            stock={product.stock}
            onAdd={onAdd}
            initial={cantidadTotal}
          />
        </div>
      ) : (
        <h2>Producto sin stock </h2>
      )}

      <Link to="/">
        <Button
          variant="contained"
          size="medium"
          style={{
            backgroundColor: "yellow",
            color: "black",
            margin: "10px",
          }}
        >
          Regresar
        </Button>
      </Link>
    </div>
  );
};

export default ItemDetail;
