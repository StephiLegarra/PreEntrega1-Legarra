import "./App.css";
import Home from "./components/Home/Home";
import ItemList from "./components/ItemList/ItemList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ItemList />
    </div>
  );
}

export default App;
