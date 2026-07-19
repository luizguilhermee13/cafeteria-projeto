document.addEventListener("DOMContentLoaded", function HistoricoPage() {
  const historicoPedidos = [
    // Categoria: Café
    {
      id: 1,
      nome: "Cappuccino Clássico",
      data: "02 de junho de 2026 às 17:30",
      preco: 12.9,
      categoria: "Café",
      imagem:
        "https://images.unsplash.com/photo-1497636577773-f1231844b336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    },
    {
      id: 2,
      nome: "Latte Macchiato",
      data: "05 de junho de 2026 às 14:30",
      preco: 13.9,
      categoria: "Café",
      imagem:
        "https://images.unsplash.com/photo-1593443320739-77f74939d0da?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      nome: "Espresso Intenso",
      data: "06 de junho de 2026 às 18:30",
      preco: 8.9,
      categoria: "Café",
      imagem:
        "https://images.unsplash.com/photo-1530798985-ca4c54a2f42a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    },
  ];

  let ContainerHistorico = document.getElementById("ContainerHistorico");

  const CardsPage = historicoPedidos
    .map((item) => {
      return `
    <div class="cardHistorico">
     <div class="headerCard">
      <span>Pedido #</span>
      <span>Entregue</span>
     </div>
      <span class="horarioHistorico">05 de junho de 2026 às 14:30</span>
    <div class="mainHistorico">
     <div class="mainImage">
      <img src="${item.imagem}" alt="img" />
     </div>
     <div class="descricaoitem">
      <div class="descricaoItemTemporario">
       <p>${item.nome}</p>
       <p>R$ ${item.preco}</p>
      </div>
       <p>2x R$ 12.90</p>
     </div>
    </div>
        <div class="footerHistorico">
          <div class="totalItem"><span>Total:</span> <span>R$ 51.70</span></div>
          <button>Pedir Novamente</button>
        </div>
    </div>
    `;
    })
    .join("");

  ContainerHistorico.innerHTML = CardsPage;
});
