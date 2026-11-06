import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

function Carrinho() {
  return (
    <div className="bg-[#faf8f5] w-full h-screen">
      <Header>
        <Link to="/cardapio" className="flex items-center gap-3 text-stone-800 font-medium hover:opacity-80 transition text-2xl">
          <MdArrowBack />
          <span>Carrinho</span>
        </Link>
      </Header>
      <div>carrinho</div>
    </div>
  );
}

export default Carrinho;
