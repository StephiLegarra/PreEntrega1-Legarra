import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dpmexolyn/image/upload/v1681162456/322253871_751953889768698_7633417918375028965_n_irjuzo.jpg"
            alt="Es es el logo de la empresa"
            className={styles.img}
          />
        </Link>
        <ul
          style={{
            display: "flex",
            gap: "40px",
            listStyle: "none",
            letterSpacing: "3px",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          <Link to="/">Todos</Link>
          <Link to="/category/remeras">Remeras</Link>
          <Link to="/category/buzos">Buzos</Link>
          <Link to="/category/pantalones">Pantalones</Link>
        </ul>
        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
