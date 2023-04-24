import Home from "./Home";
import { Outlet } from "react-router-dom";

const HomeCointainer = ({ saludo }) => {
  return (
    <div>
      <div>
        <Home saludo={saludo} />
      </div>
      <Outlet />
    </div>
  );
};

export default HomeCointainer;
