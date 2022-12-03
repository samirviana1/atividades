import {Circulo} from "./circulo";
import {Retangulo} from "./retangulo";

const circulo = new Circulo(20);
const retangulo = new Retangulo(4, 6);

circulo.desenha();
circulo.redimencionar(30);
circulo.desenha();
retangulo.desenha();
retangulo.redimencionar({comprimento: 30});
retangulo.desenha();
retangulo.redimencionar({altura: 2});
retangulo.desenha();
