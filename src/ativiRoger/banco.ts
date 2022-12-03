import {conta} from "./conta";

export class banco {
  constructor(
    private codigoB: number,
    private name: string,
    private contas: conta[]
  ) {
    this.codigoB = codigoB;
    this.name = name;
  }
  abrirConta() {}
  fecharConta() {}
}
