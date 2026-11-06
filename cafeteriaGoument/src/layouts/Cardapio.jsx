import Header from "../components/Header.jsx";
import NavBar from "../components/NavBar.jsx";

function Cardapio() {
  return (
    <div className="bg-[#faf8f5] w-full h-screen">
      <Header>
        <NavBar />
      </Header>
      <div>conteudo cardapio</div>
    </div>
  );
}

export default Cardapio;
