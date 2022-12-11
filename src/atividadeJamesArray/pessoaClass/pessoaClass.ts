class Pessoaa {
  constructor(public nome: string, public idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pessoa1 = new Pessoaa("joão", 21);
const pessoa2 = new Pessoaa("maria", 29);
const pessoa3 = new Pessoaa("josé", 31);
const pessoa4 = new Pessoaa("fabio", 40);

let lista = [pessoa1, pessoa2, pessoa3, pessoa4];

const novaLista = lista.filter((e) => e.idade < 23);
