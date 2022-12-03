export class correntista {
  constructor(
    private name: string,
    private numero_telefone: number,
    private email: string,
    private documeto: string
  ) {
    this.name = name;
    this.numero_telefone = numero_telefone;
    this.email = email;
    this.documeto = documeto;
  }
  completarComCredito(valor: number) {}
}
