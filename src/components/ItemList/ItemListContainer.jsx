import ItemList from "./ItemList";
import { productos } from "../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    const productosFiltrados = productos.filter(
      (prod) => prod.category === categoryName
    );
    const promesa = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : productos);
    });
    promesa.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
