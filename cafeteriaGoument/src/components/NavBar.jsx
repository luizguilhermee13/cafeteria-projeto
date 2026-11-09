import { Link } from "react-router-dom";
import { MdInfo, MdHistory, MdShoppingCart, MdExitToApp, MdLocalCafe } from "react-icons/md";

function NavBar() {
  return (
    <>
      <div className="logoName flex items-center justify-start gap-3 w-full max-w-xs sm:max-w-none h-16">
        {/* Ícone */}
        <div className="shrink-0 rounded-2xl p-2 text-3xl sm:text-4xl bg-[#2d1f1a] text-white flex items-center justify-center">
          <MdLocalCafe />
        </div>

        {/* Textos */}
        <div className="flex flex-col min-w-0">
          <h2 className="text-[#2d1f1a] font-normal font-serif text-xl sm:text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
            Café Gourmet
          </h2>
          <span className="text-[#8b7a6f] text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
            Delivery de experiências
          </span>
        </div>
      </div>
      <nav className="w-44 h-12 p-0 m-0">
        <div className="flex justify-around items-center w-full h-full gap-2">
          <Link to="/sobre" className="card-botao-icone">
            <MdInfo />
          </Link>
          <Link to="/pedidos" className="card-botao-icone">
            <MdHistory />
          </Link>
          <Link to="/carrinho" className="card-botao-icone">
            <MdShoppingCart />
          </Link>
          <Link to="/" className="card-botao-icone">
            <MdExitToApp />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
