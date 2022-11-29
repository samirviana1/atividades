class Bola {
  constructor(
    public cor: string,
    public circunferencia: number,
    public material: string
  ) {
    this.cor = cor;
    this.circunferencia = circunferencia;
    this.material = material;
  }

  trocarCor(novaCor: string) {
    console.log("Cor antiga", this.cor);
    this.cor = novaCor;
  }

  mostrar() {
    console.log("Cor", this.cor);
  }
}

const bola = new Bola("branca", 15, "couro");

bola.mostrar();

bola.trocarCor("verde");
bola.mostrar();
