import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = ({ cart, clearCartAlert, deleteProductById, total, navigate }) => {
  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <h3 className={styles.textCart}> Tu carrito esta vacío </h3>
          <Link to="/" className={styles.linkCart}>
            AGREGA PRODUCTOS A TU CARRITO
          </Link>
        </div>
      ) : (
        <div className={styles.containerItemsCart}>
          {cart.map((product) => {
            return (
              <div key={product.id} className={styles.itemCart}>
                <img
                  src={product.img}
                  className={styles.imgCart}
                  alt="Imagen del producto seleccionado"
                />
                <h3 className={styles.textCart}>Producto: {product.title}</h3>
                <h4 className={styles.textCart}>$ {product.price}</h4>
                <h4 className={styles.textCart}>
                  Unidades: {product.quantity}
                </h4>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "yellow",
                    color: "black",
                    marginRight: "10px",
                  }}
                  size="small"
                  onClick={() => deleteProductById(product.id)}
                >
                  Eliminar producto
                </Button>
              </div>
            );
          })}
          <h2 className={styles.textCart}>
            El total de su compra es: ${total}
          </h2>
          <div className={styles.buttonCart}>
            <Button
              variant="contained"
              size="small"
              style={{
                backgroundColor: "yellow",
                color: "black",
                marginRight: "10px",
              }}
              onClick={() => navigate("/checkout")}
            >
              Terminar la compra
            </Button>
            <Button
              onClick={clearCartAlert}
              variant="contained"
              style={{
                backgroundColor: "yellow",
                color: "black",
                marginRight: "10px",
              }}
              size="small"
            >
              Vaciar carrito
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
