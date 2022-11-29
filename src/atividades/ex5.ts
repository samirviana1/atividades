class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  quantidadeCombustivel: number;

  constructor(
    tipoCombustivel: string,
    valorLitro: number,
    quantidadeCombustivel: number
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = quantidadeCombustivel;
  }
  abastecerPorValor(valor: number) {
    const qtdCombustivel = valor / this.valorLitro;
    if (qtdCombustivel > this.quantidadeCombustivel) {
      console.log("não é possivel abastecer");
      return;
    }
    this.quantidadeCombustivel -= qtdCombustivel;
    console.log(`Foi colocado ${qtdCombustivel} litros de gasolina`);
  }

  abastecerPorLitro(qtd: number) {
    if (qtd > this.quantidadeCombustivel) {
      console.log("não é possivel abastecer");
      return;
    }
    const result = qtd * this.valorLitro;
    this.quantidadeCombustivel -= qtd;
    console.log("total:", result);
  }
  alterarValor(num: number) {
    this.valorLitro = num;
  }
  alterarCombustivel(tipo: string) {
    this.tipoCombustivel = tipo;
  }
  alterarQuantidadeCombustivel(qtd: number) {
    this.quantidadeCombustivel = qtd;
  }
}

const posto = new BombaCombustivel("alcool", 6, 7000);
posto.abastecerPorLitro(50);
posto.abastecerPorValor(700);
posto.alterarCombustivel("gasolina");
posto.alterarQuantidadeCombustivel(400);
posto.alterarValor(10);
posto.abastecerPorLitro(50);
posto.abastecerPorValor(700);
posto.abastecerPorValor(700);
posto.abastecerPorValor(700);
posto.abastecerPorLitro(500);
posto.alterarQuantidadeCombustivel(400);
