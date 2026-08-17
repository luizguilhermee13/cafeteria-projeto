var itemsCarrinho = [];
const ContainerCards = document.getElementById("ContainerCards");
let total = 0;

function additem(event) {
  if (event.target.tagName !== "BUTTON") return;

  const card = event.target.closest(".Cards_Container");

  if (!card) return;

  const nomeProduto = card.querySelector(".card_description h3").innerText;

  const valorProduto = parseFloat(
    card
      .querySelector(".card_footer p")
      .innerText.replace("valor:", "")
      .replace("R$", "")
      .trim()
      .replace(",", "."),
  );

  let itemAdd = {
    nome_pedido: nomeProduto,
    valorpedido: valorProduto,
  };

  itemsCarrinho.push(itemAdd);
  localStorage.setItem("cart", JSON.stringify(itemsCarrinho));
  updateCarrinho();
}

function updateCarrinho() {
  console.clear();
  console.log("🛒 --- CARRINHO DE COMPRAS ATUALIZADO --- 🛒");

  if (itemsCarrinho.length === 0) {
    console.log("O carrinho está vazio.");
    return;
  }

  let valorTotalGeral = 0;

  itemsCarrinho.forEach(function (pedido, index) {
    if (pedido.valorpedido != null && !isNaN(pedido.valorpedido)) {
      valorTotalGeral += pedido.valorpedido;
      console.log(
        `[Item ${index}] ${pedido.nome_pedido} | Valor: R$ ${pedido.valorpedido.toFixed(2)}`,
      );
    } else {
      console.error(`[Item ${index}] ${pedido.nome_pedido} | Valor inválido!`);
    }
  });

  console.log("-----------------------------------------");
  console.log(`💰 TOTAL GERAL: R$ ${valorTotalGeral.toFixed(2)}`);
  console.log("-----------------------------------------");
  console.log(
    "💡 Dica: Para remover um item, digite no console: removerItem(indice)",
  );
}

function removerItem(itemId) {
  itemsCarrinho.splice(itemId, 1);
  localStorage.setItem("cart", JSON.stringify(itemsCarrinho));
  updateCarrinho();
}

function loadCart() {
  itemsCarrinho = JSON.parse(localStorage.getItem("cart")) || [];
  updateCarrinho();
}

// Carrega os dados salvos assim que a página abre
window.onload = loadCart;

if (ContainerCards) {
  ContainerCards.addEventListener("click", additem);
}
