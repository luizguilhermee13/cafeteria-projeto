// Variável do carrinho global
export let carrinho = [];

let ContainerCards = document.getElementById("ContainerCards");
let topicoSelecionado = document.querySelector("ul");

export async function buscarImagens(termo) {
  try {
    const response = await fetch(`http://localhost:3000/api/unsplash?query=${encodeURIComponent(termo)}`);

    if (!response.ok) {
      throw new Error("Erro ao buscar imagens");
    }

    const imagens = await response.json();

    return imagens;
  } catch (erro) {
    console.error("Erro:", erro);

    return [];
  }
}

const cafesApi = await buscarImagens("coffee");
const docesApi = await buscarImagens("dessert");
const paesApi = await buscarImagens("bakery");

export const cafes = cafesApi.map((cafe) => {
  return {
    id: cafe.id,
    imagem: cafe.urls.regular,
    nome: cafe.alt_description ?? "Café",
    descricao: cafe.description ?? cafe.alt_description ?? "Imagem de café",
    preco: Number((Math.random() * 29 + 1).toFixed(2)),
    categoria: "Café",
  };
});

export const doces = docesApi.map((doce) => {
  return {
    id: doce.id,
    imagem: doce.urls.regular,
    nome: doce.alt_description ?? "Doce",
    descricao: doce.description ?? doce.alt_description ?? "Imagem de doce",
    preco: Number((Math.random() * 29 + 1).toFixed(2)),
    categoria: "Doces",
  };
});

export const paes = paesApi.map((pao) => {
  return {
    id: pao.id,
    imagem: pao.urls.regular,
    nome: pao.alt_description ?? "Produto de padaria",
    descricao: pao.description ?? pao.alt_description ?? "Imagem de padaria",
    preco: Number((Math.random() * 29 + 1).toFixed(2)),
    categoria: "Padaria",
  };
});

export const cardapio = [...cafes, ...doces, ...paes];

console.log(cardapio);

export function CardapioPage() {
  const CardsPage = cardapio
    .map((item) => {
      return `
        <div class="Cards_Container">
          <div class="Card_items">

            <div class="card_image">
              <img src="${item.imagem}" alt="${item.nome}" />
            </div>

            <div class="card_description">
              <h3>${item.nome}</h3>
              <p>${item.descricao}</p>
            </div>

            <div class="card_footer">
              <p>R$ ${item.preco.toFixed(2)}</p>
              <span id="esconder">0</span>

              <button onclick="addCarrinho('${item.id}')">
                + Adicionar
              </button>
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
}
