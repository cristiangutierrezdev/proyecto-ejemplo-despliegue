import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Unicornios from "./pages/Unicornios";
import Home from "./pages/Home";
import { AutenticacionProveedor } from "./contexts/Autenticacion";

function App() {
  return (
    <BrowserRouter>
      <AutenticacionProveedor>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/unicornios" element={<Unicornios />} />
        </Routes>
      </AutenticacionProveedor>
    </BrowserRouter>
  );
}

export default App;
