class Singleton {
  static instance = null;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.value = null; // Adicionando um atributo para armazenar o valor
  }

  getvalue() {
    return this.value; // Retorna o valor armazenado
  }

  setvalue(instance) {
    this.value = instance; // Define o valor armazenado
  }
}

module.exports = Singleton; // Exportando a classe
