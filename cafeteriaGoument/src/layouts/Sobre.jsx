import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";
import { MdArrowBack, MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
function Sobre() {
  return (
    <div className="bg-[#faf8f5] w-full h-screen">
      <Header>
        <Link to="/cardapio" className="flex items-center gap-3 text-stone-800 font-medium hover:opacity-80 transition text-2xl">
          <MdArrowBack />
          <span>Sobre & Contato</span>
        </Link>
      </Header>

      <main id="containerSobre" className="h-auto box-border flex flex-col justify-evenly gap-8 p-8 bg-[#faf8f5]">
        <div className="containerCards w-auto h-auto bg-white text-black rounded-2xl">
          <div className="h-80 bg-[url('https://images.unsplash.com/photo-1527512666523-bb0e4389d842?crop=entropy')] bg-size-[100%] rounded-2xl flex flex-col justify-end p-8 text-xl text-white">
            <h2 className="font-bold font-serif">Café Gourmet</h2>
            <p>Experiências que aquecem o coração</p>
          </div>
        </div>

        <div className="containerCards">
          <div className="cardHistory h-auto flex flex-col flex-wrap justify-evenly gap-4 bg-white p-8 rounded-2xl">
            <h4 className="text-xl text-[#2d1f1a] font-semibold">Nossa História</h4>
            <p className="text-justify text-lg text-[#8b7a6f]">
              Fundado em 2015, o Café Gourmet nasceu do sonho de levar experiências autênticas de café para São Paulo. Combinamos grãos
              selecionados de fazendas brasileiras com técnicas artesanais europeias.
            </p>
            <p className="text-justify text-lg text-[#8b7a6f]">
              Cada xícara é preparada com carinho por nossos baristas especializados, e nossos produtos de padaria são feitos diariamente em
              nosso próprio forno. Acreditamos que bons momentos começam com um bom café.
            </p>
          </div>
        </div>

        <div className="containerCards">
          <div className="cardContact h-auto flex flex-col flex-wrap gap-4 bg-white p-4 rounded-2xl">
            <h4 className="text-xl text-[#2d1f1a] font-semibold">Entre em Contato</h4>
            <div className="cardBody h-auto flex  flex-wrap bg-[#f0ebe6] p-4 gap-4 rounded-2xl">
              <div className="icon pt-1">
                <MdLocationOn className="w-full text-[2.5em] text-center bg-[#6b4423] text-white rounded-3xl p-2" />
              </div>
              <ol className="flex flex-col gap-1 justify-evenly text-[#8b7a6f]">
                <li>
                  <h4 className="text-[#2d1f1a] text-lg font-semibold">Endereço</h4>
                </li>
                <li>Rua Augusta, 1850 - Consolação</li>
                <li>São Paulo - SP, 01304-001</li>
                <li>Próximo à estação Consolação do Metrô</li>
              </ol>
            </div>

            <div className="cardBody h-auto flex  flex-wrap bg-[#f0ebe6] p-4 gap-4 rounded-2xl">
              <div className="icon pt-1">
                <MdPhone className="w-full text-[2.5em] text-center bg-[#6b4423] text-white rounded-3xl p-2" />
              </div>
              <ol className="flex flex-col gap-1 justify-evenly text-[#8b7a6f]">
                <li>
                  <h4 className="text-[#2d1f1a] text-lg font-semibold">Telefone</h4>
                </li>
                <li>(11)3456-7894</li>
                <li>Clique para Ligar</li>
              </ol>
            </div>

            <div className="cardBody h-auto flex  flex-wrap bg-[#f0ebe6] p-4 gap-4 rounded-2xl">
              <div className="icon pt-1">
                <MdEmail className="w-full text-[2.5em] text-center bg-[#6b4423] text-white rounded-3xl p-2" />
              </div>
              <ol className="flex flex-col gap-1 justify-evenly text-[#8b7a6f]">
                <li>
                  <h4 className="text-[#2d1f1a] text-lg font-semibold">Email</h4>
                </li>
                <li>contato@cafegoument.com</li>
                <li>Clique para enviar</li>
              </ol>
            </div>

            <div className="cardBody h-auto flex  flex-wrap bg-[#f0ebe6] p-4 gap-4 rounded-2xl">
              <div className="icon pt-1">
                <MdAccessTime className="w-full text-[2.5em] text-center bg-[#6b4423] text-white rounded-3xl p-2" />
              </div>
              <ol className="flex flex-col gap-1 justify-evenly text-[#8b7a6f]">
                <li>
                  <h4 className="text-[#2d1f1a] text-lg font-semibold">Horário de Funcionamento</h4>
                </li>
                <li>Segunda a Sexta: 7h às 22h</li>
                <li>Sábado: 8h às 23h</li>
                <li>Domingo: 8h às 20h</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="containerCards">
          <div className="cardRSocial h-auto flex flex-col flex-wrap gap-6 bg-white p-8 rounded-2xl">
            <h4 className="m-0 text-xl text-[#2d1f1a] font-semibold">Redes Sociais</h4>
            <div className="cardButtons grid grid-cols-2 gap-4 text-center">
              <div>
                <button className="w-full p-[0.8rem] bg-[#f5f1ed] border-none rounded-[0.8rem] text-base font-semibold hover:bg-[#d4a57480] transition-colors cursor-pointer">
                  Instragram
                </button>
              </div>
              <div>
                <button className="w-full p-[0.8rem] bg-[#f5f1ed] border-none rounded-[0.8rem] text-base font-semibold hover:bg-[#d4a57480] transition-colors cursor-pointer">
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="containerCards">
          <div className="flex flex-col gap-[1.4rem] text-center h-auto bg-white p-8 rounded-2xl">
            <h4 className="text-xl text-[#2d1f1a] font-semibold">Nossa Loja Física</h4>

            <div className="w-full h-56 bg-[url('https://images.unsplash.com/photo-1768812141741-4ee1bf3d9095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080')] bg-cover bg-center text-white text-left content-end relative rounded-2xl">
              <span className="text-lg font-extrabold absolute top-[80%] left-[2%]">Rua Augusta, 1850 Consolação - São Paulo, SP</span>
            </div>

            <span>Estacionamento conveniado disponível • Aceita todos os cartões • Wi-Fi grátis</span>
          </div>
        </div>
      </main>
      <footer className="m-auto p-8 text-center text-[#8b7a6f]">Faça seu pedido online ou visite nossa loja física!</footer>
    </div>
  );
}

export default Sobre;
