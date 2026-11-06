import { Link } from "react-router-dom";
import { MdInfo, MdHistory, MdShoppingCart, MdExitToApp, MdLocalCafe } from "react-icons/md";

function NavBar() {
  return (
    <>
      <div className="logoName flex items-center justify-center gap-2 w-56 h-16">
        <div className="w-auto rounded-2xl p-1 text-4xl bg-[#2d1f1a] text-white">
          <MdLocalCafe />
        </div>

        <div className="">
          <h2 className="text-[#2d1f1a] font-normal  font-serif text-2xl">Café Gourmet</h2>
          <span className="text-[#8b7a6f]">Delivery de experiências</span>
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
