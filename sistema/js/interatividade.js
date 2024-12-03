// Função para validar login
function validarLogin() {
  // Captura os inputs
  const matricula = document
    .querySelector("input[name='matricula']")
    .value.trim();
  const senha = document.querySelector("input[name='senha']").value.trim();

  // Verifica se os campos estão preenchidos
  if (!matricula || !senha) {
    alert("Matrícula e senha não podem estar vazios.");
    return;
  }

  // Verifica as combinações válidas
  if (
    (matricula === "60050" && senha === "202024") ||
    (matricula === "60051" && senha === "222024")
  ) {
    window.location.href = "paginainicial.html";
  } else {
    alert("Matrícula ou senha inválida. Tente novamente.");
  }
}

// Função para limpar os inputs
function limparInputs() {
  document.querySelector("input[name='matricula']").value = "";
  document.querySelector("input[name='senha']").value = "";
}

function atualizarDataHora() {
  const agora = new Date();

  // Formata a data no padrão dd/mm/yyyy
  const dataFormatada = agora.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Formata a hora no padrão hh:mm
  const horaFormatada = agora.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Inserendo data e hora no HTML
  document.getElementById("data").innerText = dataFormatada;
  document.getElementById("hora").innerText = horaFormatada;
}

// Atualizando a data e hora ao carregar a página
atualizarDataHora();

// Atualizando a hora a cada minuto
setInterval(atualizarDataHora, 60000);

// Função para gerar um número aleatório de 4 dígitos
function gerarNumeroPedido() {
  return Math.floor(1000 + Math.random() * 9000);
}

// Função para selecionar um endereço aleatório
function gerarEndereco() {
  const enderecos = [
    "Rua Josias de Paulo, 35 - São Paulo",
    "Rua do Amanhã, 154 - São Paulo",
    "Rua Alegria, 2345 - São Paulo",
  ];
  return enderecos[Math.floor(Math.random() * enderecos.length)];
}

// Função para selecionar um entregador aleatório
function gerarEntregador() {
  const entregadores = [
    "Lucas Silva",
    "Pedro Henrique",
    "João Vitor",
    "Matheus Lima",
  ];
  return entregadores[Math.floor(Math.random() * entregadores.length)];
}

// Função para atualizar os valores na interface
function solicitarPedido() {
  const numeroPedido = gerarNumeroPedido();
  const endereco = gerarEndereco();
  const entregador = gerarEntregador();

  // Atualiza os elementos na página
  document.getElementById(
    "numeroPedido"
  ).innerText = `Número do pedido: ${numeroPedido}`;
  document.getElementById(
    "localEntrega"
  ).innerText = `Local de entrega: ${endereco}`;
  document.getElementById("entregador").innerText = `Entregador: ${entregador}`;
  document.getElementById("situacao").innerText = "Situação: A entregar!";
}

function concluida() {
  alert("pedido concluido");
}

function naoconcluida() {
  alert("pedido não concluido");
}
