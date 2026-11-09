import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import PedidosConcluidos from "../components/PedidosConcluidos.jsx";

function PedidosFeitos() {
  return (
    <div className="bg-[#faf8f5] w-full min-h-screen">
      <Header>
        <Link to="/cardapio" className="flex items-center gap-3 text-stone-800 font-medium hover:opacity-80 transition text-2xl">
          <MdArrowBack />
          <span>Histórico de Pedidos</span>
        </Link>
      </Header>

      <main className="px-4 py-8">
        <div className="flex justify-center">
          <PedidosConcluidos />
        </div>
      </main>
    </div>
  );
}

export default PedidosFeitos;
