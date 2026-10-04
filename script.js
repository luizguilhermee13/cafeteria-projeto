import { logar } from "./frontend/aplicativo/assets/modules/login.js";
import * as cardapio from "./frontend/aplicativo/assets/modules/ui.js";
import * as carrinho from "./frontend/aplicativo/assets/modules/carrinho.js";

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    logar(email, senha);
  });
}

// deixa disponível para onclick=""
window.addCarrinho = carrinho.addCarrinho;
window.removerCarrinho = carrinho.removerCarrinho;

// somente executa o cardápio se estiver na página do cardápio
if (document.getElementById("ContainerCards")) {
  cardapio.CardapioPage();
  carrinho.renderizarCarrinho();
}
