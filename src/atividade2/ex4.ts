class Universidade {
  private nome: string;
  private local: string;

  get recuperarNome(): string {
    return this.nome;
  }

  get recuperarLocal(): string {
    return this.local;
  }

  constructor(nome: string, local: string) {
    this.nome = nome;
    this.local = local;
  }
}

class Pessoa {
  private nome: string;
  private dataNascimento: string;
  private universidade: Universidade;

  get recuperarNome(): string {
    return this.nome;
  }

  get recuperarDataNascimento(): string {
    return this.dataNascimento;
  }

  constructor(
    nome: string,
    dataNascimento: string,
    universidade: Universidade
  ) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.universidade = universidade;
  }

  imprimeInformacoes() {
    console.log(`
          Nome: ${this.nome},
          Data de Nascimento: ${this.dataNascimento}
          Universidade: ${this.universidade.recuperarNome}
        `);
  }
}

const universidade = new Universidade("Feevale", "NH");

const pessoa = new Pessoa("Edson", "31/10/1997", universidade);
pessoa.imprimeInformacoes();
