class Carro {
  consumoCombustivel: number;
  qtdCombustivel: number;
  constructor(consumoCombustivel: number) {
    this.consumoCombustivel = consumoCombustivel;
    this.qtdCombustivel = 0;
  }

  anda(km: number) {
    const consumo = km / this.consumoCombustivel;
    console.log(consumo);

    if (consumo < 0) {
      console.log("sem combustivel");
      return;
    }
    this.qtdCombustivel -= consumo;
  }
  obterGasolina(): number {
    return this.qtdCombustivel;
  }
  adicionarGasolina(qtd: number) {
    this.qtdCombustivel = qtd;
  }
}

const myFuquinha1600 = new Carro(10);
myFuquinha1600.adicionarGasolina(50);
console.log("1__", myFuquinha1600.obterGasolina());
myFuquinha1600.anda(100);
console.log(myFuquinha1600.obterGasolina());
