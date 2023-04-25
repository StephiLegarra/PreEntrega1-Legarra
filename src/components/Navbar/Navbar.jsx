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
          />
        </Link>
        <ul>
          <Link className={styles.navegablesNavbar} to="/">
            Todos
          </Link>
          <Link className={styles.navegablesNavbar} to="/category/remeras">
            Remeras
          </Link>
          <Link className={styles.navegablesNavbar} to="/category/buzos">
            Buzos
          </Link>
          <Link className={styles.navegablesNavbar} to="/category/pantalones">
            Pantalones
          </Link>
        </ul>
        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
