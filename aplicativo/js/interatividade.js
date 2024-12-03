var listaCafeteria = [];

function acessarcarrinho() {
  var divs = document.getElementsByClassName("carrinhopai");
  var div = divs[0];

  if (div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
}

function pedir() {
  var divs = document.getElementsByClassName("carrinhopai");
  var div = divs[0];
  var endereco = document.getElementById("local");

  if (div.style.display === "flex" && endereco.value != "") {
    div.style.display = "none";
    window.alert("pedido realizado com sucesso");
  } else {
    div.style.display = "flex";
    window.alert("digite um endereço");
  }
}

function fecharcarrinho() {
  var divs = document.getElementsByClassName("carrinhopai");
  var div = divs[0];

  if (div.style.display === "flex") {
    div.style.display = "none";
  } else {
    div.style.display = "flex";
  }
}

// Adicionar item ao carrinho
function add(button) {
  var card = button.closest(".card");
  var nomePedido = card.querySelector("h2").innerText;
  var valorPedidoTexto = card
    .querySelector("#valorpedido")
    .innerText.replace("R$", "")
    .trim();
  var valorNumerico = parseFloat(valorPedidoTexto);

  if (isNaN(valorNumerico)) {
    console.error("Erro na conversão do valor do pedido:", valorPedidoTexto);
    alert(
      "Erro na conversão do valor do pedido. Por favor, verifique os dados."
    );
    return;
  }

  var pedido = {
    nome_pedido: nomePedido,
    valorpedido: valorNumerico,
  };

  listaCafeteria.push(pedido);
  localStorage.setItem("cart", JSON.stringify(listaCafeteria));
  updateCarrinho();
}

function updateCarrinho() {
  var pedidos = "";
  listaCafeteria.forEach(function (pedido, index) {
    if (pedido.valorpedido != null && !isNaN(pedido.valorpedido)) {
      var valorFormatado = pedido.valorpedido.toFixed(2);
      pedidos += `
        <div>
          ${pedido.nome_pedido}
          <br>Valor: R$ ${valorFormatado}
          <button onclick="removerItem(${index})">Remover</button>
        </div>
      `;
    } else {
      console.error("Valor inválido encontrado no carrinho:", pedido);
      pedidos += `
        <div>
          ${pedido.nome_pedido}
          <br>Valor inválido
          <button onclick="removerItem(${index})">Remover</button>
        </div>
      `;
    }
  });
  document.getElementById("dadoscarrinho").innerHTML = pedidos;
}

function removerItem(indice = null) {
  if (indice === null) {
    indice = Math.floor(Math.random() * listaCafeteria.length);
  }
  listaCafeteria.splice(indice, 1);
  localStorage.setItem("cart", JSON.stringify(listaCafeteria));
  updateCarrinho();
}

function removerItemAleatorio() {
  var indiceAleatorio = Math.floor(Math.random() * listaCafeteria.length);
  removerItem(indiceAleatorio);
}

function loadCart() {
  listaCafeteria = JSON.parse(localStorage.getItem("cart")) || [];
  updateCarrinho();
}

window.onload = loadCart;

// tela historico
function pedircarrinho() {
  window.alert("pedido encaminhado");
}

// tela de  Cadastro
// integração
document
  .getElementById("formCadastro")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    // Captura dos valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const sexo = document.getElementById("sexo").value;
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    // corpo da requisição
    const body = {
      nome,
      idade,
      sexo,
      usuario,
      senha,
      telefone,
      email,
    };

    try {
      // Enviando  dados para o servidor usando a rota /criarConta
      const response = await fetch("http://localhost:7000/criarConta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // tipo de dado enviado
        },
        body: JSON.stringify(body), // Converte o objeto JS para JSON
      });

      // Verifica o resultado da requisição
      const result = await response.json();
      if (response.ok) {
        alert(result.message || "Cadastro realizado com sucesso!"); // mensagem de sucesso
        window.location.href = "index.html";
      } else {
        alert(
          result.error ||
            "Erro ao cadastrar. Verifique os dados e tente novamente."
        ); // mensagem de erro  do backend
      }
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      alert("Erro ao conectar ao servidor. Tente novamente.");
    }
  });

// validando formulario
// Seleciona o formulário
const formCadastro = document.getElementById("formCadastro");

// Adiciona evento de envio ao formulário
formCadastro.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o envio do formulário sem validação

  // Captura dos valores dos campos
  const nome = document.getElementById("nome").value.trim();
  const idade = parseInt(document.getElementById("idade").value, 10);
  const sexo = document.getElementById("sexo").value.trim().toLowerCase();
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value;

  // Validações
  if (nome.length < 3) {
    alert("O nome deve ter pelo menos 3 caracteres.");
    return;
  }

  if (isNaN(idade) || idade < 18) {
    alert("A idade deve ser um número igual ou maior que 18.");
    return;
  }

  if (!["masculino", "feminino", "outro"].includes(sexo)) {
    alert('O campo "sexo" deve ser Masculino, Feminino ou Outro.');
    return;
  }

  if (usuario.length < 5) {
    alert("O nome de usuário deve ter pelo menos 5 caracteres.");
    return;
  }

  if (senha.length < 6 || !/\d/.test(senha) || !/[a-zA-Z]/.test(senha)) {
    alert(
      "A senha deve ter pelo menos 6 caracteres e conter letras e números."
    );
    return;
  }

  // Se validações passarem = mensagem de sucesso
  alert("Cadastro realizado com sucesso!");

  // enviando os dados para o servidor
  formCadastro.submit();
});
