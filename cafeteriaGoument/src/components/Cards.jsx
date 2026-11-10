function Cards({ topicoSelecionado }) {
  const cardapio = [
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

  const produtosFiltrados = topicoSelecionado === "Todos" ? cardapio : cardapio.filter((item) => item.categoria === topicoSelecionado);

  return (
    <div className="Cards_Container grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-4 text-[#2d1f1a] pb-4 w-full">
      {produtosFiltrados.map((item, id) => (
        <div
          key={id}
          className="Card_items flex flex-col justify-between w-full max-w-[17.4rem] h-88 bg-white rounded-2xl transition-transform duration-300 hover:scale-105 py-2"
        >
          <div>
            <img src={item.imagem} alt={item.nome} className="card_image w-full h-48 object-cover rounded-t-2xl" />
          </div>
          <div className="card_description px-4">
            <h3 className="font-sans text-[#2d1f1a] font-semibold line-clamp-2 overflow-hidden mb-2">{item.nome}</h3>
            <p className="text-[#8b7a6f] text-sm line-clamp-2 overflow-hidden mb-2">{item.descricao}</p>
          </div>
          <div className="card_footer mb-4 px-4 flex justify-between items-center font-serif rounded-b-2xl">
            <p className="text-[#6b4423] text-lg font-bold">R$ {item.preco.toFixed(2)}</p>
            <button className="py-1 px-3 bg-[#6b4423] text-white text-sm rounded-full cursor-pointer hover:bg-[#52331a] transition-colors">
              + Adicionar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
