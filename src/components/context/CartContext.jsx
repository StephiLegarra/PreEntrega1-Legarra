import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // LOCALSTORAGE
  let cartLocal = JSON.parse(localStorage.getItem("cart"));
  let existInLocalStorage = cartLocal || [];

  const [cart, setCart] = useState(existInLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  // AGREGAR AL CARRITO
  const agregarAlCarrito = (producto) => {
    let existe = isInCart(producto.id);
    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: producto.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };

  //LIMPIAR CARRITO
  const clearCart = () => {
    setCart([]);
  };

  // ELIMINAR PRODUCTO
  const deleteProductById = (id) => {
    const productosFiltrados = cart.filter((elemento) => elemento.id !== id);
    setCart(productosFiltrados);
  };

  // PRECIO TOTAL
  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  // CANTIDAD TOTAL DE UNIDADES EN CARTWIDGET
  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  // OBTENER LA CANTIDAD EN BASE LA ID DE UN PRODUCTO
  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product ? product.quantity : undefined;
  };

  let data = {
    cart,
    agregarAlCarrito,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
