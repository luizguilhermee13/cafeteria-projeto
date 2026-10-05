export async function buscarImagens(termo) {
  try {
    const response = await fetch(`http://localhost:3000/api/unsplash?query=${encodeURIComponent(termo)}`);
    console.log(response);
    if (!response.ok) {
      throw new Error("Erro ao buscar imagens");
    }

    const imagens = await response.json();
    console.log(imagens);

    return imagens;
  } catch (erro) {
    console.error("Erro:", erro);

    return [];
  }
}
