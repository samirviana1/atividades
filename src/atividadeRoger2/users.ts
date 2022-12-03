import {usersList} from "./data";
console.clear();
// console.log("Exemplo de Usuários");
// console.clear();

// // * Imprimir a quantidade de usuários cadastrados
// // * Utilizando **map** imprimir a listagem de usuários contendo apenas os campos
// //     * name
// //     * age
// //     * gender

// const retornoUser = usersList.map((user) => {
//   const {name, age, gender} = user;
//   return {
//     name,
//     age,
//     gender,
//   };
// });

// // console.log(retornoUser);
// //------------------------------------------------------------

// // * Utilizando o **map** imprimir a listagem de usuarios contendo os campos
// //     * name
// //     * username
// //     * Idoso ( )

// // const listaUsuarios = usersList.map(({name, login, age}) => {
//   // return {
//     name: name,
//     username: login.username,
//     idoso: age >= 60 ? "sim" : "não",
//   };
// });
// //console.table(listaUsuarios);

// // * Utilizando **filter** imprimir quantidade de usuarios do sexo Masculino ( gender = male )
// //const produtosCaros = productsList.filter((f) => f.price > 10);

// const userMale = usersList.filter((genero) => genero.gender === "male");

// let cont = 0;
// const quantidadeUserMale = usersList.filter((genero) => {
//   if (genero.gender === "male") {
//     cont++;
//   }
// });

// console.table(userMale);

// console.log(`A quantidade de usuários 'male' é ${cont}`);

//* Utilizando **filter** imprimir quantidade de usuarios do sexo Feminino e idade superior a 50 anos

// let cont = 0;
// const userFeminos = usersList.filter((user) => {
//   if (user.gender === "female" && user.age > 50) {
//     cont++;
//   }
// });

// console.log(cont);

// const userFemino = usersList.filter(
//   (users) => users.gender === "female" && users.age > 50
// );

// console.table(userFemino);
// //* Utilizando **filter** imprimir quantidade de usuarios do sexo Feminino e idade inferior a 51 anos
// let cont = 0;
// const userFeminos = usersList.filter((user) => {
//   if (user.gender === "female" && user.age < 51) {
//     cont++;
//   }
// });

// console.log(cont);

//* Utilizando **some** informe na tela se existe algum usuário com password = cobra

// const descobrirSenha = usersList.some(
//   (user) => user.login.password === "cobra"
// );

// console.log(descobrirSenha);
//* Utilizando **findIndex** informe na tela qual a posição no array do usuário com uuid de login = '0efefa28-0d13-4714-a33c-5e70c9331345'
// const posicao = productsList.findIndex((f) => f.description === "Vodka");
// const posicao = usersList.findIndex(
//   (p) => p.login.uuid === "0efefa28-0d13-4714-a33c-5e70c9331345"
// );

// console.log(posicao);
//* Utilizando **find** imprima na tela o nome do usuário, idade e email do usuário com uuid de login = 'afd65cb0-a158-45a2-a052-8a45e2dd020f'
// const indisponivel = productsList.find((f) => !f.sale);

// const usuario = usersList.find((user) => {
//   user.login.uuid === "afd65cb0-a158-45a2-a052-8a45e2dd020f";
//   return {
//     name: user.name,
//     email: user.email,
//     idade: user.age,
//   };
// });

// console.log(usuario);

const user = usersList.find((user) => {
  if (user.login.uuid === "afd65cb0-a158-45a2-a052-8a45e2dd020f") {
    console.log(user.name);
    console.log(user.email);
    console.log(user.age);
  }
});
