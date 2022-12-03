import {correntista} from "./correntista";

export class conta {
  constructor(
    private codigo: number,
    private saldo: number,
    private correntista: correntista
  ) {
    this.codigo = codigo;
    this.saldo = saldo;
  }
  sacar(valorSaque: number) {}
  depositar(valorDepositar: number) {}
}
