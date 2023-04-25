import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product }) => {
  return (
    <div className={styles.fondoItemDetail}>
      <div className={styles.containerItemDetail}>
        <img
          src={product.img}
          alt="Imagen de la prenda disponible para venta"
          width="500"
          height="500"
        />
        <h1> {product.title}</h1>
        <h2> ${product.price}</h2>
        <h4> {product.description}</h4>
      </div>
    </div>
  );
};

export default ItemDetail;
