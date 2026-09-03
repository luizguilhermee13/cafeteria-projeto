// Variável do carrinho global
let carrinho = [];
let cardapio = [];

document.addEventListener("DOMContentLoaded", function CardapioPage() {
  cardapio = [
    // Categoria: Café
    {
      id: 1,
      nome: "Cappuccino Clássico",
      descricao: "Espresso cremoso com leite vaporizado e espuma aveludada",
      preco: 12.9,
      categoria: "Café",
      imagem: "https://images.unsplash.com/photo-1497636577773-f1231844b336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    },
    {
      id: 2,
      nome: "Latte Macchiato",
      descricao: "Leite vaporizado com um toque de espresso e arte latte",
      preco: 13.9,
      categoria: "Café",
      imagem: "https://images.unsplash.com/photo-1593443320739-77f74939d0da?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      nome: "Espresso Intenso",
      descricao: "Café expresso forte e aromático, puro sabor italiano",
      preco: 8.9,
      categoria: "Café",
      imagem: "https://images.unsplash.com/photo-1530798985-ca4c54a2f42a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    },
    {
      id: 4,
      nome: "Café com Leite Premium",
      descricao: "Blend equilibrado de café e leite, suave e reconfortante",
      preco: 10.9,
      categoria: "Café",
      imagem: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=60",
    },

    // Categoria: Padaria
    {
      id: 5,
      nome: "Croissant Francês",
      descricao: "Croissant artesanal folhado e amanteigado",
      preco: 9.9,
      categoria: "Padaria",
      imagem: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 6,
      nome: "Pães Artesanais",
      descricao: "Seleção de pães fresquinhos feitos diariamente",
      preco: 12.9,
      categoria: "Padaria",
      imagem: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60",
    },

    // Categoria: Doces
    {
      id: 7,
      nome: "Torta de Amêndoas",
      descricao: "Deliciosa torta francesa com amêndoas e massa folhada",
      preco: 15.9,
      categoria: "Doces",
      imagem: "https://images.unsplash.com/photo-1519869325930-281384150729?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 8,
      nome: "Bolo de Chocolate",
      descricao: "Fatia generosa de bolo de chocolate belga",
      preco: 14.9,
      categoria: "Doces",
      imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60",
    },
  ];

  let ContainerCards = document.getElementById("ContainerCards");
  let topicoSelecionado = document.querySelector("ul");

  const CardsPage = cardapio
    .map((item) => {
      return `
      <div class="Cards_Container">
       <div class="Card_items">
        <div class="card_image">
          <img src="${item.imagem}" alt="img"/>
       </div>
       <div class="card_description">
        <h3>${item.nome}</h3>
        <p>${item.descricao}</p>
       </div>
       <div class="card_footer">
        <p>R$ ${item.preco}</p>
        <span id="esconder">0</span>
        <button onclick="addCarrinho(${item.id})">+ Adicionar</button>
       </div>       
       </div>
      </div>
    `;
    })
    .join("");

  ContainerCards.innerHTML = CardsPage;

  function selecionarTopico(e) {
    let topicoClicado = e.target.innerHTML.trim();
    console.log(topicoClicado);

    let produtosFiltrados;

    if (topicoClicado === "Todos") {
      produtosFiltrados = cardapio;
    } else {
      produtosFiltrados = cardapio.filter((item) => {
        return item.categoria === topicoClicado;
      });
    }

    let CardsPage = produtosFiltrados
      .map((item) => {
        return `
      <div class="Cards_Container">
       <div class="Card_items">
        <div class="card_image">
          <img src="${item.imagem}" alt="img"/>
       </div>
       <div class="card_description">
        <h3>${item.nome}</h3>
        <p>${item.descricao}</p>
       </div>
       <div class="card_footer">
        <p>R$ ${item.preco}</p>
        <span id="esconder">0</span>
        <button onclick="addCarrinho(${item.id})">+ Adicionar</button>
       </div>       
       </div>
      </div>`;
      })
      .join("");

    ContainerCards.innerHTML = CardsPage;
  }

  topicoSelecionado.addEventListener("click", selecionarTopico);

  renderizarCarrinho();
});

function renderizarCarrinho() {
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
                    <p class="text-sm text-gray-500">R$ ${item.preco} x ${item.quantidade}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="font-bold text-gray-800">R$ ${subtotal.toFixed(2)}</span>
                    <button onclick="removerCarrinho(${item.id})" class="text-red-500 hover:text-red-700">&times;</button>
                </div>
            `;
      cartItemsDiv.appendChild(itemDiv);
    });

    if (cartTotal) {
      cartTotal.innerText = `R$ ${valorTotalGeral.toFixed(2)}`;
    }
  }
}

function addCarrinho(produtoID) {
  const produtoAdd = cardapio.find((i) => i.id === produtoID);
  const itemExistente = carrinho.find((i) => i.id === produtoID);

  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({ ...produtoAdd, quantidade: 1 });
  }
  renderizarCarrinho();
}

function removerCarrinho(produtoID) {
  const index = carrinho.findIndex((i) => i.id === produtoID);
  if (index !== -1) {
    if (carrinho[index].quantidade > 1) {
      carrinho[index].quantidade--;
    } else {
      carrinho.splice(index, 1);
    }
  }
  renderizarCarrinho();
}
