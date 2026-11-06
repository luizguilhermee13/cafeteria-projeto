import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-amber-100 h-screen flex justify-center items-center flex-col gap-4">
      <h1>Estou na tela Login</h1>
      <Link to={"/cardapio"}> Entrar em Cardapio </Link>
      <Link to={"/carrinho"}> Entrar em Carrinho </Link>
      <Link to={"/pedidos"}> Entrar em Pedidos </Link>
      <Link to={"/sobre"}> Entrar em Sobre </Link>
    </div>
  );
}

export default Login;
