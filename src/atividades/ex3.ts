class ContaCorrente {
  conta: string;
  correntista: string | undefined;
  saldo!: number;

  constructor(conta: string, correntista: string, saldo?: number) {
    this.conta = conta;
    this.correntista = correntista;
    this.saldo = saldo ?? 0;
  }

  alterarNome(nome: string) {
    this.correntista = nome;
    console.log("Bem vindo ao James Bank:", this.correntista);
    console.log("seu saldo atual é:", this.saldo);
  }

  depositar(valor: number) {
    this.saldo += valor;
    console.log("seu saldo atual é:", this.saldo);
  }

  sacar(valor: number) {
    const newSaldo = this.saldo - valor;
    if (newSaldo > 0) {
      this.saldo = newSaldo;
      console.log("seu saldo atual é:", this.saldo);
    } else {
      console.log("saldo indisponivel");
    }
  }
}

const nova = new ContaCorrente("nova", "teste0");
console.log("antigo", nova.correntista);

nova.alterarNome("teste1");

nova.depositar(1000);
nova.sacar(100);
