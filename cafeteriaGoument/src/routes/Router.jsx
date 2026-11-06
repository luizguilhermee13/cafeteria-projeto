import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../layouts/Login.jsx";
import Cardapio from "../layouts/Cardapio.jsx";
import Carrinho from "../layouts/Carrinho.jsx";
import PedidosFeitos from "../layouts/PedidosFeitos.jsx";
import Sobre from "../layouts/Sobre.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pedidos" element={<PedidosFeitos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
