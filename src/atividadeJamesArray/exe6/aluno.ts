class Aluno extends Humano {
  constructor(
    nome: string,
    idade: number,
    public status: boolean,
    public nota?: number
  ) {
    super(nome, idade);
    (this.nota = nota), (this.status = status);
  }
}
const aluno1 = new Aluno("samir", 25, false);
const aluno2 = new Aluno("MM", 25, false);
const aluno3 = new Aluno("MZ", 25, false);
const aluno4 = new Aluno("Mauricio", 25, false);
const aluno5 = new Aluno("Leo", 25, false);
const aluno6 = new Aluno("Felipe", 25, false);

const listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6];

let gabarito = ["A", "A", "C", "D", "C", "B", "D", "E", "B", "E"];

const respostaAluno = [];

//gabarito.Math.random()
