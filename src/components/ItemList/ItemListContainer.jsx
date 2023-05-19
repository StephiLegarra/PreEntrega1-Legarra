import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import { query, collection, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "productos");

    if (categoryName) {
      const itemCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const productos = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(productos);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      {items.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "30px",
          }}
        >
          <PacmanLoader color="#ffff00" size={40} />
        </div>
      )}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
