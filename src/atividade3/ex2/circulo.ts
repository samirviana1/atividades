import {FormatoElemento} from "./formatodeelemento";

export class Circulo implements FormatoElemento {
  raio: number;
  constructor(raio: number) {
    this.raio = raio;
  }
  desenha(): void {
    console.log(`desenhar um circulo de raio ${this.raio}.....`);
  }

  redimencionar(paramRaio: number): void {
    this.raio = paramRaio;
  }
}
