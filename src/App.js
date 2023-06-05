import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Add from "./pages/Add";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element="">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add" element={<Add />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
