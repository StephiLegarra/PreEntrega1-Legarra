import { useContext } from "react";
import Cart from "./Cart";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const navigate = useNavigate();

  const clearCartAlert = () => {
    Swal.fire({
      title: "Seguro quieres vaciar todo el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "SI",
      denyButtonText: `NO`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Se limpió el carrito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Ok, no se eliminó el carrito", "", "error");
      }
    });
  };

  return (
    <div>
      <Cart
        cart={cart}
        deleteProductById={deleteProductById}
        total={total}
        clearCartAlert={clearCartAlert}
        navigate={navigate}
      />
    </div>
  );
};

export default CartContainer;
