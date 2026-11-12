import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Carrinho() {
  return (
    <div className="bg-[#faf8f5] w-full h-screen">
      <Header>
        <Link to="/cardapio" className="flex items-center gap-3 text-stone-800 font-medium hover:opacity-80 transition text-2xl py-4 px-6">
          <MdArrowBack />
          <span>Carrinho</span>
        </Link>
      </Header>

      <main className="w-full h-[calc(100vh-5rem)]">
        <div className="m-0 flex justify-center p-16">
          <div className="flex flex-col items-center gap-4 text-lg">
            <div className="bg-[#f0ebe6] text-[#8b7a6f] rounded-[4rem] p-6 text-[6rem] flex items-center justify-center text-center">
              <HiOutlineShoppingBag />
            </div>

            <h2 className="m-0 text-xl font-bold text-[#2d1f1a]">Seu carrinho está vazio</h2>

            <p className="m-0 text-base text-[#8b7a6f]">Adicione produtos deliciosos do nosso cardápio</p>

            <Link to="/cardapio" className="btn-principal no-underline inline-block">
              Voltar ao Cardápio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Carrinho;
