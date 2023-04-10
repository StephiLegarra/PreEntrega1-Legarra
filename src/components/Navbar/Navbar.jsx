import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://res.cloudinary.com/dpmexolyn/image/upload/v1681162456/322253871_751953889768698_7633417918375028965_n_irjuzo.jpg"
        alt="Es es el logo de la empresa"
        className={styles.img}
      />
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
        <li>Remeras</li>
        <li>Buzos</li>
        <li>Pantalones</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
