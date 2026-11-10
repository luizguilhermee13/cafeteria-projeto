import { useState } from "react";

import Header from "../components/Header.jsx";
import NavBar from "../components/NavBar.jsx";
import Cards from "../components/Cards.jsx";

function Cardapio() {
  const [topicoClicado, setTopicoClicado] = useState("Todos");

  return (
    <div className="bg-[#faf8f5] w-full min-h-screen">
      <Header>
        <NavBar />
      </Header>

      <main id="containerCardapio" className="px-4 min-h-screen box-border bg-[#f5f1ed] pb-8 w-full">
        <div className="ContainerCategorias py-6 flex flex-col gap-2 ">
          <h2 className="font-serif text-2xl font-semibold text-[#2d1f1a] ">Nosso Cardápio</h2>

          <ul id="category" className="my-4 mx-auto list-none flex gap-2 sm:gap-4 flex-wrap justify-start">
            <li
              onClick={(e) => setTopicoClicado(e.currentTarget.innerText)}
              className="p-[0.6rem] border border-[#2d1f1a5e] rounded-xl text-[#2d1f1a] cursor-pointer hover:text-white hover:opacity-70 hover:bg-[#6b4423] transition-colors"
            >
              Todos
            </li>
            <li
              onClick={(e) => setTopicoClicado(e.currentTarget.innerText)}
              className="p-[0.6rem] border border-[#2d1f1a5e] rounded-xl text-[#2d1f1a] cursor-pointer hover:text-white hover:opacity-70 hover:bg-[#6b4423] transition-colors"
            >
              Café
            </li>
            <li
              onClick={(e) => setTopicoClicado(e.currentTarget.innerText)}
              className="p-[0.6rem] border border-[#2d1f1a5e] rounded-xl text-[#2d1f1a] cursor-pointer hover:text-white hover:opacity-70 hover:bg-[#6b4423] transition-colors"
            >
              Padaria
            </li>
            <li
              onClick={(e) => setTopicoClicado(e.currentTarget.innerText)}
              className="p-[0.6rem] border border-[#2d1f1a5e] rounded-xl text-[#2d1f1a] cursor-pointer hover:text-white hover:opacity-70 hover:bg-[#6b4423] transition-colors"
            >
              Doces
            </li>
          </ul>
        </div>

        <div className="Cards_Container w-full" id="ContainerCards">
          {<Cards topicoSelecionado={topicoClicado} />}
        </div>

        <div className="cart-container w-full max-w-md bg-white rounded-xl p-6 box-border font-serif mt-6 mx-auto">
          <div className="cart">
            <h2 className=" text-2xl font-bold text-[#2c2c2c] mb-4 border-b-2 border-[#f0f0f0] pb-1">Seu Pedido</h2>
            <div className="cart-items min-h-20 flex items-center justify-center text-[#777777] text-xs mb-5 text-center" id="cart-items">
              <p id="cart-null">seu carrinho está vazio</p>
            </div>
          </div>
          <div className="cart-total flex justify-between items-center text-xl font-semibold text-[#2c2c2c] border-t-2 border-[#f0f0f0] pt-4 mb-5 capitalize">
            <span>total</span>
            <span id="cart-total">R$ 0.00</span>
          </div>
          <button
            id="realizarPedido"
            disabled
            className="w-full bg-[#ffc107] text-[#2c2c2c] border-none rounded-lg p-3.5 text-xl font-bold cursor-pointer transition-[background-color,transform] duration-200 ease-in-out hover:bg-[#e0a800] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Finalizar Pedido
          </button>
        </div>
      </main>
    </div>
  );
}

export default Cardapio;
