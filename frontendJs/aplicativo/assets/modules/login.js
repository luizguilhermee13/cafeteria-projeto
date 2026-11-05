export function logar(emailDigitado, senhaDigitada) {
  const email = emailDigitado.trim();
  const senha = senhaDigitada.trim();

  if (email === "adm" && senha === "123") {
    window.location.href = "./frontend/aplicativo/pages/cardapio.html";
    return true;
  }

  alert("E-mail ou senha incorretos!");
  return false;
}
