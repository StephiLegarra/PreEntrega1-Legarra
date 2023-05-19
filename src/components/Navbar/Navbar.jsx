import { useContext, useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoryResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoryResult);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ display: "inline-block", paddingLeft: "10px" }}>
          <img
            width="80"
            height="80"
            src="https://res.cloudinary.com/dpmexolyn/image/upload/v1681162456/322253871_751953889768698_7633417918375028965_n_irjuzo.jpg"
            alt="Es es el logo de la empresa"
            style={{
              borderRadius: "50%",
              border: "2px solid yellow",
            }}
          />
        </Link>
        <div style={{ display: "flex", gap: "30px" }}>
          {categories.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.navegablesNavbar}
              >
                {category.title}
              </Link>
            );
          })}
        </div>
        {cart.length === 0 ? null : <CartWidget />}
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
