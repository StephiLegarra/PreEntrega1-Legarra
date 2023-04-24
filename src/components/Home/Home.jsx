import styles from "./Home.module.css";

const Home = ({ saludo }) => {
  return (
    <div className={styles.containerHome}>
      <h1>{saludo}</h1>
    </div>
  );
};

export default Home;
