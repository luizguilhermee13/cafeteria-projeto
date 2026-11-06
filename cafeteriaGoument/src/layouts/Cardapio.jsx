import { Link } from "react-router-dom";

function Cardapio() {
  return (
    <div>
      <h1>Estou na tela do Cardapio</h1>
      <Link to={"/"}> Entrar em Login </Link>
    </div>
  );
}

export default Cardapio;
