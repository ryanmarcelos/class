class Carro {
  constructor(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
    this.velocidadeAtual = 0;
  }

  acelerar(valor) {
    this.velocidadeAtual += valor;
    this.mostrarStatus();
  }

  frear(valor) {
    this.velocidadeAtual = Math.max(0, this.velocidadeAtual - valor);
    this.mostrarStatus();
  }

  mostrarStatus() {
    console.log(
      `O carro ${this.modelo} (${this.cor}) está a ${this.velocidadeAtual} km/h.`
    );
  }
}

const c = new Carro("Civic", "preto");
//c.acelerar(30);
//c.frear(10);
