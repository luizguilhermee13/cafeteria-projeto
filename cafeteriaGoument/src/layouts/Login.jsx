import { Link } from "react-router-dom";
import { MdLocalCafe } from "react-icons/md";

function Login() {
  return (
    <div className="bg-[#faf8f5] w-full h-screen flex justify-center items-center flex-col gap-4">
      <form id="loginForm" className="bg-white grid p-8 rounded-3xl shadow-xl w-105">
        {/* Cabeçalho do Formulário / icone */}
        <div className="card_header pb-6 flex flex-col items-center gap-2">
          <div className="bg-[#6b4423] p-3.5 rounded-full text-white shadow-md">
            <MdLocalCafe className="text-4xl" />
          </div>
          <h4 className="title text-2xl font-semibold text-stone-800">Café Gourmet</h4>
          <p className="text text-sm text-[#8b7a6f]">Entre na sua conta</p>
        </div>

        {/* Campos do Formulário */}
        <div className="card_main w-full flex flex-col gap-3">
          <label htmlFor="email" className="text-stone-700 text-sm font-medium">
            E-mail
          </label>
          <input
            className="h-11 text-stone-800 text-base rounded-xl border border-[#e6dfd5] bg-[#fcf9f5] py-1 px-4 outline-none transition-all duration-100 focus:border-[#6b4423] focus:ring-1 focus:ring-[#6b4423]"
            type="email"
            name="email"
            id="email"
            placeholder="seu@email.com"
            autoComplete="username"
            required
          />

          <label htmlFor="senha" className="text-stone-700 text-sm font-medium">
            Senha
          </label>
          <input
            className="h-11 text-stone-800 text-base rounded-xl border border-[#e6dfd5] bg-[#fcf9f5] py-1 px-4 outline-none transition-all duration-100 focus:border-[#6b4423] focus:ring-1 focus:ring-[#6b4423]"
            type="password"
            name="senha"
            id="senha"
            placeholder="********"
            autoComplete="current-password"
            required
          />
        </div>

        {/* Rodapé do Formulário  / Botão de Ação */}
        <div className="card_footer flex flex-col items-center w-full gap-4 pt-6">
          <Link
            to="/cardapio"
            className="w-full text-center text-white bg-[#6b4423] hover:bg-[#5a381c] transition rounded-xl text-base font-medium py-3 shadow-md"
          >
            Entrar
          </Link>
          <p className="text-xs text-[#8b7a6f] cursor-pointer hover:underline">Não tem uma conta? Cadastre-se</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
