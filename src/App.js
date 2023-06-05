import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Router from "./routes";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
