import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let saludo = "Bienvenidos a MB INDUMENTARIA";

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
