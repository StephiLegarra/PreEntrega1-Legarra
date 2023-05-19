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
import styles from "./FormCheckout.module.css";
import { Link } from "react-router-dom";

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
        <div style={{ margin: "50px" }}>
          <div className={styles.containerOrder}>
            <h1 className={styles.containerOrderText}>
              ¡Muchas gracias por tu compra! <br />
              <br />
              El número de tu orden de compra es : {orderId} <br /> <br /> Por
              favor conservalo por cualquier inconveniente!
            </h1>
            <Link
              to="/"
              style={{ display: "inline-block", paddingLeft: "10px" }}
            >
              <img
                className={styles.orderImg}
                src="https://res.cloudinary.com/dpmexolyn/image/upload/v1681162456/322253871_751953889768698_7633417918375028965_n_irjuzo.jpg"
                alt="Es es el logo de la empresa"
              />
            </Link>
          </div>
          <Link to="/" className={styles.continue}>
            SEGUIR COMPRANDO
          </Link>
        </div>
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
