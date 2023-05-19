import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  // CONST ON ADD
  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Agregaste ${product.title} al carrito`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  let cantidadTotal = getQuantityById(product.id);

  return (
    <div>
      <ItemDetail
        product={product}
        onAdd={onAdd}
        cantidadTotal={cantidadTotal}
      />
    </div>
  );
};

export default ItemDetailContainer;
