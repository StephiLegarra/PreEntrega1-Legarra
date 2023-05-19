import { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <div className={styles.containerCart}>
        <ShoppingCartIcon style={{ fontSize: "2rem" }} />
        <div className={styles.bubbleCounter}>
          <span>{total}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
