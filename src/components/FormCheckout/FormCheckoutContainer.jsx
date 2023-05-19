import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../context/CartContext";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(db, "productos", product.id), {
        stock: product.stock - product.quantity,
      })
    );
    clearCart();
  };
  console.log(orderId);

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: null,
      password: "",
      confirmPassword: "",
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(
          15,
          "El nombre es demasiado largo, no puede superar los 15 caracteres"
        ),
      email: Yup.string()
        .email("El campo debe ser un email")
        .required("Este campo es obligatorio"),
      telefono: Yup.number()
        .positive("El numero debe ser positivo")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "La contraseña debe tener una mayuscula, una minuscula, un caracter especial y un numero, ademas entre 6 y 15 caracteres",
        }),
      confirmPassword: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <h1>
          Gracias por tu compra, el nro de orden es: {orderId}, por favor
          conservelo
        </h1>
      ) : (
        <FormCheckout
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          values={values}
        />
      )}
    </div>
  );
};

export default FormCheckoutContainer;
