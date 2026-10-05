import { carrinho, cardapio } from "./ui.js";

export function renderizarCarrinho() {
  const cartItemsDiv = document.getElementById("cart-items");
  const cartVazio = document.getElementById("cart-null");
  const cartTotal = document.getElementById("cart-total");
  const cartButton = document.getElementById("realizarPedido");

  if (!cartItemsDiv) return;

  cartItemsDiv.innerHTML = "";

  if (carrinho.length === 0) {
    if (cartVazio) cartVazio.style.display = "block";
    if (cartButton) cartButton.disabled = true;
    if (cartTotal) cartTotal.innerText = "R$ 0.00";
  } else {
    if (cartVazio) cartVazio.style.display = "none";
    if (cartButton) cartButton.disabled = false;

    let valorTotalGeral = 0;

    carrinho.forEach((item) => {
      const subtotal = item.preco * item.quantidade;
      valorTotalGeral += subtotal;

      const itemDiv = document.createElement("div");
      itemDiv.className = "flex justify-between items-center";

      itemDiv.innerHTML = `
        <div>
          <p class="font-semibold text-gray-800">${item.nome}</p>
          <p class="text-sm text-gray-500">
            R$ ${item.preco.toFixed(2)} x ${item.quantidade}
          </p>
        </div>

        <div class="flex items-center space-x-2">
          <span class="font-bold text-gray-800">
            R$ ${subtotal.toFixed(2)}
          </span>

          <button
            onclick="removerCarrinho(${item.id})"
            class="text-red-500 hover:text-red-700"
          >
            &times;
          </button>
        </div>
      `;

      cartItemsDiv.appendChild(itemDiv);
    });

    if (cartTotal) {
      cartTotal.innerText = `R$ ${valorTotalGeral.toFixed(2)}`;
    }
  }
}

export function addCarrinho(produtoID) {
  const produtoAdd = cardapio.find((item) => item.id === produtoID);

  if (!produtoAdd) {
    console.error("Produto não encontrado:", produtoID);
    return;
  }

  const itemExistente = carrinho.find((item) => item.id === produtoID);

  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({
      ...produtoAdd,
      quantidade: 1,
    });
  }

  renderizarCarrinho();
}

export function removerCarrinho(produtoID) {
  const index = carrinho.findIndex((item) => item.id === produtoID);

  if (index === -1) return;

  if (carrinho[index].quantidade > 1) {
    carrinho[index].quantidade--;
  } else {
    carrinho.splice(index, 1);
  }

  renderizarCarrinho();
}
