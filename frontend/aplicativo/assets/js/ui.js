document.addEventListener("DOMContentLoaded", function CardapioPage() {
  const cardapio = [
    // Categoria: Café
    {
      id: 1,
      nome: "Cappuccino Clássico",
      descricao: "Espresso cremoso com leite vaporizado e espuma aveludada",
      preco: 12.9,
      categoria: "Café",
      imagem:
        "https://images.unsplash.com/photo-1497636577773-f1231844b336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    },
    {
      id: 2,
      nome: "Latte Macchiato",
      descricao: "Leite vaporizado com um toque de espresso e arte latte",
      preco: 13.9,
      categoria: "Café",
      imagem:
        "https://images.unsplash.com/photo-1593443320739-77f74939d0da?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      nome: "Espresso Intenso",
      descricao: "Café expresso forte e aromático, puro sabor italiano",
      preco: 8.9,
      categoria: "Café",
      imagem:
        "https://images.unsplash.com/photo-1530798985-ca4c54a2f42a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    },
    {
      id: 4,
      nome: "Café com Leite Premium",
      descricao: "Blend equilibrado de café e leite, suave e reconfortante",
      preco: 10.9,
      categoria: "Café",
      imagem:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=60",
    },

    // Categoria: Padaria
    {
      id: 5,
      nome: "Croissant Francês",
      descricao: "Croissant artesanal folhado e amanteigado",
      preco: 9.9,
      categoria: "Padaria",
      imagem:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 6,
      nome: "Pães Artesanais",
      descricao: "Seleção de pães fresquinhos feitos diariamente",
      preco: 12.9,
      categoria: "Padaria",
      imagem:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60",
    },

    // Categoria: Doces
    {
      id: 7,
      nome: "Torta de Amêndoas",
      descricao: "Deliciosa torta francesa com amêndoas e massa folhada",
      preco: 15.9,
      categoria: "Doces",
      imagem:
        "https://images.unsplash.com/photo-1519869325930-281384150729?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 8,
      nome: "Bolo de Chocolate",
      descricao: "Fatia generosa de bolo de chocolate belga",
      preco: 14.9,
      categoria: "Doces",
      imagem:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60",
    },
  ];

  let ContainerCards = document.getElementById("ContainerCards");

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
        <button>+ Adicionar</button>
       </div>       
       </div>
      </div>
    `;
    })
    .join("");

  ContainerCards.innerHTML = CardsPage;
});
