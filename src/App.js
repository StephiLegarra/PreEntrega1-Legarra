import "./App.css";
import Footer from "./components/Footer/Footer";
import HomeCointainer from "./components/Home/HomeCointainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let saludo = "Bienvenidos a MB INDUMENTARIA";

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Footer />}>
              <Route element={<HomeCointainer saludo={saludo} />}>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                  path="/category/:categoryName"
                  element={<ItemListContainer />}
                />
                <Route
                  path="/itemDetail/:id"
                  element={<ItemDetailContainer />}
                />
              </Route>
            </Route>
          </Route>
          <Route
            path="*"
            element={<h1> 404 not fount - Lo siento, está pagina no existe</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <Route path="/" element={<HomeCointainer saludo={saludo} />} />
