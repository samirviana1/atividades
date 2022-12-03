import {FormatoElemento} from "./formatodeelemento";

export class Retangulo implements FormatoElemento {
  constructor(public comprimento: number, public altura: number) {
    this.comprimento = comprimento;
    this.altura = altura;
  }
  desenha(): void {
    console.log(`Desenhando retangulo: ${this.comprimento}X ${this.altura} cm`);
  }
  redimencionar(data: {comprimento?: number; altura?: number}): void {
    (this.comprimento = data.comprimento ?? this.comprimento),
      (this.altura = data.altura ?? this.altura);
  }
}
