import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://pps.whatsapp.net/v/t61.24694-24/322253871_751953889768698_7633417918375028965_n.jpg?ccb=11-4&oh=01_AdRohpydmDnHQvKPMbwOziXkNQQa7ZGgifAtSTFv9tJGWg&oe=6438E4A1"
        alt="logo"
        className={styles.img}
      />
      <ul
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <li>Remeras</li>
        <li>Buzos</li>
        <li>Pantalones</li>
      </ul>
    </div>
  );
};

export default Navbar;
