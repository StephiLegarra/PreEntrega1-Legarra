import styles from "./Home.module.css";

import CreditCardIcon from "@mui/icons-material/CreditCard";

const Home = ({ saludo }) => {
  return (
    <div>
      <h2 className={styles.containerSaludo}>{saludo}</h2>
      <div>
        <h3 className={styles.containerPromo}>
          Hasta 6 cuotas sin interés <CreditCardIcon />
        </h3>
      </div>
    </div>
  );
};

export default Home;
