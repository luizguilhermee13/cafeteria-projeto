import { useState } from "react";
import Header from "../components/Header.jsx";
import NavBar from "../components/NavBar.jsx";
import Cards from "../components/Cards.jsx";

function Cardapio() {
  const [topicoClicado, setTopicoClicado] = useState("Todos");

  const itensCarrinho = [];

  return (
    <div className="bg-[#faf8f5] w-full min-h-screen">
      <Header>
        <NavBar />
      </Header>

      <main id="containerCardapio" className="px-4 min-h-screen box-border bg-[#f5f1ed] pb-8 w-full">
        {/* Seção de Categorias */}
        <div className="ContainerCategorias py-6 flex flex-col gap-2">
          <h2 className="font-serif text-2xl font-semibold text-[#2d1f1a]">Nosso Cardápio</h2>

          <ul id="category" className="my-4 mx-auto list-none flex gap-2 sm:gap-4 flex-wrap justify-start">
            {["Todos", "Café", "Padaria", "Doces"].map((categoria) => (
              <li
                key={categoria}
                onClick={(e) => setTopicoClicado(e.currentTarget.innerText)}
                className={`p-[0.6rem] border border-[#2d1f1a5e] rounded-xl cursor-pointer transition-colors ${
                  topicoClicado === categoria
                    ? "bg-[#6b4423] text-white"
                    : "text-[#2d1f1a] hover:text-white hover:opacity-70 hover:bg-[#6b4423]"
                }`}
              >
                {categoria}
              </li>
            ))}
          </ul>
        </div>

        {/* Listagem dos Cards Dinâmicos */}
        <div className="Cards_Container w-full">
          <Cards topicoSelecionado={topicoClicado} />
        </div>

        {/* Resumo do Pedido / Carrinho Rápido na tela de Cardápio */}
        <div className="card-padrao w-full max-w-md font-serif mt-6 mx-auto">
          <div className="cart">
            <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 border-b-2 border-[#f0f0f0] pb-1">Seu Pedido</h2>

            <div className="cart-items min-h-20 flex items-center justify-center text-[#777777] text-xs mb-5 text-center">
              {itensCarrinho.length === 0 ? (
                <p>seu carrinho está vazio</p>
              ) : (
                <div className="w-full">{/* Futuros itens do carrinho entram aqui */}</div>
              )}
            </div>
          </div>

          <div className="cart-total flex justify-between items-center text-xl font-semibold text-[#2c2c2c] border-t-2 border-[#f0f0f0] pt-4 mb-5 capitalize">
            <span>total</span>
            <span>R$ 0.00</span>
          </div>

          <button
            disabled={itensCarrinho.length === 0}
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
